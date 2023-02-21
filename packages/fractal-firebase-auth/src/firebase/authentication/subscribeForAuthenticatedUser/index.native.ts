import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AuthenticationState, createAuthenticationState } from '../../../types/AuthenticationState';

export function subscribeForAuthenticatedUser(onFetch: (state: AuthenticationState) => void): () => void {
    return auth().onAuthStateChanged((user) => {
        onFetch(
            createAuthenticationState({
                firebaseUser: user as unknown as FirebaseAuthTypes.User,
                loading: false
            })
        );
    });
}
