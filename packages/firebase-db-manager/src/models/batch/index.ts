import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default function batch(): firebase.firestore.WriteBatch {
    return firebase.firestore().batch();
}
