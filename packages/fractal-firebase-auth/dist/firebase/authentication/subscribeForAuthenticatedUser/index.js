import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { createAuthenticationState } from '../../../types/AuthenticationState';
export function subscribeForAuthenticatedUser(onFetch) {
    return firebase.auth().onAuthStateChanged((user) => {
        onFetch(createAuthenticationState({
            firebaseUser: user,
            loading: false
        }));
    }, (error) => {
        alert(error.message);
    });
}
//# sourceMappingURL=index.js.map