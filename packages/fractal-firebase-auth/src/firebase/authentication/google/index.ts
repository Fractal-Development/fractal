import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function google(androidID: string): Promise<void> {
    console.log(androidID);
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(provider);
}
