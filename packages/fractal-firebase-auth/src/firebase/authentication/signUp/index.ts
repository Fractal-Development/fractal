import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function signUp(email: string, password: string): Promise<void> {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
}
