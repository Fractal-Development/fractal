import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type CollectionReference = FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

export function isCollectionReference(value: unknown): value is CollectionReference {
    const casted = value as CollectionReference;
    return casted.doc !== undefined;
}
