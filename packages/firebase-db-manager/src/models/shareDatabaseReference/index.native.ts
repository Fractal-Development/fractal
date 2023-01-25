import firestore from '@react-native-firebase/firestore';
import { isReferenceHolder } from '../../types/CollectionData';
import { DocumentReference } from '../../types';

export default function shareDatabaseReference<Collections extends object>(
    collections: Collections,
    reference?: DocumentReference | ReturnType<typeof firestore>
): Collections {
    const newEntries = Object.entries(collections).map((entry): [string, unknown] => {
        const [key, collection] = entry;
        if (isReferenceHolder(collection)) {
            const finalReference = reference ?? firestore();
            const newCollection = collection.setReference(finalReference.collection(collection.id));
            return [key, newCollection];
        }
        return [key, collection];
    });
    return Object.fromEntries(newEntries) as unknown as Collections;
}
