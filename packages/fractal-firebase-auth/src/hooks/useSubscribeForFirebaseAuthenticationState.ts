import { useSubscribeForAuthenticatedUser } from './useSubscribeForAuthenticatedUser';

export type FirebaseAuthenticationState = 'loading' | 'accessIsAllowed' | 'firebaseUserIsMissing';

export function useSubscribeForFirebaseAuthenticationState(): FirebaseAuthenticationState {
    const { firebaseUser, loading } = useSubscribeForAuthenticatedUser();

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
