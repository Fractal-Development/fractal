import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function facebookSignInWithPopup(): Promise<unknown> {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    return firebase.auth().signInWithPopup(provider);
}
