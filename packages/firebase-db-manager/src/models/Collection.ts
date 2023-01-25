import { isCollectionReference, CollectionReference, IDEnabled, SortingPredicate, FilterPredicate, PaginationPredicate } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { Document } from './Document';
import produce, { immerable } from 'immer';
import { ReferenceHolder } from '../types/CollectionData';
import { Query } from '../types/FirebaseQuery';
import { Optional } from 'utility-types';
import batch from './batch';

export class Collection<DataType extends IDEnabled, SubCollections> implements IDEnabled, ReferenceHolder {
    id: string;
    collections: SubCollections;
    private reference: CollectionReference | null;
    [immerable] = true;

    constructor(id: string, subCollections: SubCollections) {
        this.id = id;
        this.reference = null;
        this.collections = subCollections;
    }

    setReference(reference: CollectionReference): Collection<DataType, SubCollections> {
        return produce(this, (draft: Collection<DataType, SubCollections>) => {
            draft.reference = reference;
        });
    }

    // Document creation

    async createDocument(data: Optional<DataType, 'id'>, skipAwait?: boolean, merge = true): Promise<Document<DataType, SubCollections>> {
        const reference = this.getCollectionReference();
        const id = data.id ?? uuidv4();
        const newData = produce(data, (draft: DataType) => {
            draft.id = id;
        }) as DataType;
        const documentReference = reference.doc(id);
        if (skipAwait) {
            documentReference.set(newData, { merge });
        } else {
            await documentReference.set(newData, { merge });
        }
        return new Document(newData, documentReference, this.collections);
    }

    // Getting

    async getDocument(id: string): Promise<Document<DataType, SubCollections>> {
        const reference = this.getCollectionReference();
        const documentReference = reference.doc(id);
        const response = await documentReference.get();
        if (response.exists) {
            const data = response.data() as DataType;
            return new Document(data, documentReference, this.collections);
        } else {
            throw Error('Document does not exist, check your id');
        }
    }

    async getDocuments(
        sortingPredicate?: SortingPredicate,
        filterPredicate?: FilterPredicate,
        paginationPredicate?: PaginationPredicate,
        editQuery?: (reference: CollectionReference | Query) => Query
    ): Promise<Array<Document<DataType, SubCollections>>> {
        const reference = this.getCollectionReference();
        const query = this.getQuery(reference, sortingPredicate, filterPredicate, paginationPredicate, editQuery);
        const snapshot = await query.get();
        if (!snapshot.empty) {
            return snapshot.docs.map((firebaseDocument) => {
                const data = firebaseDocument.data() as DataType;
                return new Document(data, firebaseDocument.ref, this.collections);
            });
        } else {
            return [];
        }
    }

    // Setting

    async setDocument(newData: DataType): Promise<Document<DataType, SubCollections>> {
        const reference = this.getCollectionReference();
        const documentReference = reference.doc(newData.id);
        await documentReference.set(newData);
        return new Document(newData, documentReference, this.collections);
    }

    // Updating

    async updateDocument(data: DataType): Promise<Document<DataType, SubCollections>> {
        const reference = this.getCollectionReference();
        const documentReference = reference.doc(data.id);
        await documentReference.update(data);
        return new Document(data, documentReference, this.collections);
    }

    // Deleting

    async deleteDocument(id: string): Promise<void> {
        const reference = this.getCollectionReference();
        await reference.doc(id).delete();
    }

    async deleteCollection(): Promise<void> {
        const dbBatch = batch();
        const collectionReference = this.getCollectionReference();
        const snapshot = await collectionReference.get();
        if (!snapshot.empty) {
            snapshot.docs.forEach((doc: any) => dbBatch.delete(doc.ref));
            await dbBatch.commit();
        }
    }

    // Subscribing to changes

    subscribeToDocument(
        id: string,
        onDataChange: (document: Document<DataType, SubCollections>) => void,
        onError: (error: Error) => void,
        onDataDoesNotExist: () => void
    ): () => void {
        const reference = this.getCollectionReference();
        return reference.doc(id).onSnapshot(
            (snapshot) => {
                if (snapshot.exists) {
                    const data = snapshot.data() as DataType;
                    const document = new Document(data, snapshot.ref, this.collections);
                    onDataChange(document);
                } else {
                    onDataDoesNotExist();
                }
            },
            (error) => {
                onError(error);
            }
        );
    }

    subscribeToDocuments(
        onDataChange: (documents: Array<Document<DataType, SubCollections>>) => void,
        onError: (error: Error) => void,
        sortingPredicate?: SortingPredicate,
        filterPredicate?: FilterPredicate,
        editQuery?: (reference: CollectionReference | Query) => Query
    ): () => void {
        const reference = this.getCollectionReference();
        const query = this.getQuery(reference, sortingPredicate, filterPredicate, undefined, editQuery);
        return query.onSnapshot(
            (snapshot) => {
                if (!snapshot.empty) {
                    const documents = snapshot.docs.map((firebaseDocument) => {
                        const data = firebaseDocument.data() as DataType;
                        return new Document(data, firebaseDocument.ref, this.collections);
                    });
                    onDataChange(documents);
                } else {
                    onDataChange([]);
                }
            },
            (error) => {
                onError(error);
            }
        );
    }

    // Utility Methods

    private getCollectionReference(): CollectionReference {
        if (this.reference != null && isCollectionReference(this.reference)) {
            return this.reference;
        } else {
            throw Error('No reference set or is a document reference');
        }
    }

    private getQuery(
        reference: CollectionReference | Query,
        sortingPredicate?: SortingPredicate,
        filterPredicate?: FilterPredicate,
        paginationPredicate?: PaginationPredicate,
        editQuery?: (reference: CollectionReference | Query) => CollectionReference | Query
    ): CollectionReference | Query {
        let newReference = reference;

        if (sortingPredicate != null) {
            newReference = newReference.orderBy(sortingPredicate.property, sortingPredicate.direction);
        }

        if (filterPredicate != null) {
            newReference = newReference.where(filterPredicate.property, filterPredicate.direction, filterPredicate.value);
        }

        if (paginationPredicate != null && paginationPredicate.page != null) {
            const lastIndex = paginationPredicate.pageSize * paginationPredicate.page + (paginationPredicate.page > 0 ? 1 : 0);
            newReference = newReference.startAt(lastIndex).limit(paginationPredicate.pageSize);
        }

        if (editQuery != null) {
            newReference = editQuery(newReference);
        }

        return newReference;
    }
}
