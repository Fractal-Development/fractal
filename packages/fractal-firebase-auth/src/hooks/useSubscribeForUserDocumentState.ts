import { MinimalExpectedDatabase } from '../types/MinimalExpectedDatabase';
import { MinimalUserData } from '../types/MinimalUser';
import { useAuthenticationState } from './useAuthenticationState';
import { useSubscribeForUserDocument } from './useSubscribeForUserDocument';
import { useUserDocument } from './useUserDocument';

export function useSubscribeForUserDocumentState<T extends MinimalUserData, S>(
    database: MinimalExpectedDatabase<T, S>
): 'loading' | 'firestoreUserDocumentIsMissing' | 'firestoreUserDocumentIsAvailable' {
    const { firebaseUser } = useAuthenticationState();
    const isLoadingUserDocument = useSubscribeForUserDocument(firebaseUser, database);
    const userDocument = useUserDocument();
    const isUserDocumentMissing = userDocument == null;

    if (!isLoadingUserDocument && isUserDocumentMissing) {
        return 'firestoreUserDocumentIsMissing';
    }
    if (!isLoadingUserDocument && !isUserDocumentMissing) {
        return 'firestoreUserDocumentIsAvailable';
    }
    return 'loading';
}
