import auth from '@react-native-firebase/auth';
import { AuthenticationState, createAuthenticationState } from '../../../types/AuthenticationState';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

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
