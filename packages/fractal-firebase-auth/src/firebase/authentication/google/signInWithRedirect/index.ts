import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function googleSignInWithRedirect(_androidID: string): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
}
