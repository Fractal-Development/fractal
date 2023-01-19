import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export async function getRedirectResult(): Promise<unknown> {
    return firebase.auth().getRedirectResult();
}
