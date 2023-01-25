import { immerable } from 'immer';
import { DocumentReference, IDEnabled } from '../types';
import shareDatabaseReference from './shareDatabaseReference';

export class Document<DataType extends IDEnabled, SubCollections> {
    collections: SubCollections;
    data: Readonly<DataType>;
    [immerable] = true;

    constructor(data: DataType, reference?: DocumentReference, subCollections?: SubCollections) {
        this.data = data;
        if (reference != null && subCollections != null) {
            this.collections = shareDatabaseReference(subCollections, reference);
        }
    }

    id(): string {
        return this.data.id;
    }
}
