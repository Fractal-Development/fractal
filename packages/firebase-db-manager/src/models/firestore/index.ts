import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export function firestore(): ReturnType<typeof firebase.firestore> {
    return firebase.firestore();
}
