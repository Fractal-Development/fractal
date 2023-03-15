import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export function batch(): firebase.firestore.WriteBatch {
    return firebase.firestore().batch();
}
