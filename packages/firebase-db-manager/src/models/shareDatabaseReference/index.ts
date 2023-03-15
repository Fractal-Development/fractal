import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { CollectionReference, DocumentReference } from '../../types';
import { isReferenceHolder } from '../../types/CollectionData';

export default function shareDatabaseReference<Collections extends object>(
    collections: Collections,
    reference?: DocumentReference | firebase.firestore.Firestore
): Collections {
    const newEntries = Object.entries(collections).map((entry): [string, unknown] => {
        const [key, collection] = entry;
        if (isReferenceHolder(collection)) {
            const finalReference = reference ?? firebase.firestore();
            const newCollection = collection.setReference(finalReference.collection(collection.id) as unknown as CollectionReference);
            return [key, newCollection];
        }
        return [key, collection];
    });
    return Object.fromEntries(newEntries) as unknown as Collections;
}
