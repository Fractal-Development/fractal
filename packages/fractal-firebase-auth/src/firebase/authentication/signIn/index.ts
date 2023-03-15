import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function signIn(email: string, password: string): Promise<void> {
    await firebase.auth().signInWithEmailAndPassword(email, password);
}
