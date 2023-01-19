import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export function auth() {
    return firebase.auth();
}
