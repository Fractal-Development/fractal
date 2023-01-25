import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default function firestore(): ReturnType<typeof firebase.firestore> {
    return firebase.firestore();
}
