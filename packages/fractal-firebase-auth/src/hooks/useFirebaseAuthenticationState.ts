import { useAuthenticationState } from './useAuthenticationState';
import { FirebaseAuthenticationState } from '../types/FirebaseAuthenticationState';
import { getFirebaseAuthenticationState } from '../utils/getFirebaseAuthenticationState';

export function useFirebaseAuthenticationState(): FirebaseAuthenticationState {
    const authenticationState = useAuthenticationState();

    return getFirebaseAuthenticationState(authenticationState);
}
