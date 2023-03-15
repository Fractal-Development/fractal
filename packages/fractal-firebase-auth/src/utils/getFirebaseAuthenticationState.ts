import { AuthenticationState, FirebaseAuthenticationState } from '../types';

export function getFirebaseAuthenticationState({ firebaseUser, loading }: AuthenticationState): FirebaseAuthenticationState {
    const isLoadingFirebaseUser = firebaseUser === undefined && loading;
    const isFirebaseUserMissing = firebaseUser === null && !loading;

    if (isLoadingFirebaseUser) {
        return 'loading';
    }
    if (isFirebaseUserMissing) {
        return 'firebaseUserIsMissing';
    }
    if (!isLoadingFirebaseUser && !isFirebaseUserMissing) {
        return 'accessIsAllowed';
    }
    return 'loading';
}
