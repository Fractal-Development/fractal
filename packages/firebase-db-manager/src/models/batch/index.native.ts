import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export function batch(): FirebaseFirestoreTypes.WriteBatch {
    return firestore().batch();
}
