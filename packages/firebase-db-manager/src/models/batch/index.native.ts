import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export default function batch(): FirebaseFirestoreTypes.WriteBatch {
    return firestore().batch();
}
