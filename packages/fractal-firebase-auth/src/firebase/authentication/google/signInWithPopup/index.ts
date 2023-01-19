import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function googleSignInWithPopup(_androidID: string): Promise<unknown> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
}
