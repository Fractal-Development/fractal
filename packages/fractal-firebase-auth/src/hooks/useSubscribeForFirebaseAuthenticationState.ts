import { FirebaseAuthenticationState } from '../types/FirebaseAuthenticationState';
import { getFirebaseAuthenticationState } from '../utils/getFirebaseAuthenticationState';
import { useSubscribeForAuthenticatedUser } from './useSubscribeForAuthenticatedUser';

export function useSubscribeForFirebaseAuthenticationState(): FirebaseAuthenticationState {
    const authenticationState = useSubscribeForAuthenticatedUser();

    return getFirebaseAuthenticationState(authenticationState);
}
