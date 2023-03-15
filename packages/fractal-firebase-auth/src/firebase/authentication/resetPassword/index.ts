import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
}
