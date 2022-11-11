import auth from '@react-native-firebase/auth';
import { AuthenticationState, createAuthenticationState } from '../../../types/AuthenticationState';

export async function signOut(): Promise<AuthenticationState> {
    await auth().signOut();
    return createAuthenticationState({
        loading: false
    });
}
