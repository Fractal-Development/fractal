import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function facebook(): Promise<void> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
}
