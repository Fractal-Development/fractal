import auth from '@react-native-firebase/auth';
import { createAuthenticationState } from '../../../types/AuthenticationState';
export function subscribeForAuthenticatedUser(onFetch) {
    return auth().onAuthStateChanged((user) => {
        onFetch(createAuthenticationState({
            firebaseUser: user,
            loading: false
        }));
    });
}
//# sourceMappingURL=index.native.js.map