import { useContext, useEffect, useState } from 'react';
import { subscribeForUserDocument } from '../firebase/users/subscribeForUserDocument';
import { MinimalUserData, MinimalExpectedDatabase } from '../types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserDocumentContext } from '../context/UserDocumentProvider';

export function useSubscribeForUserDocument<T extends MinimalUserData, S>(
    firebaseUser: FirebaseAuthTypes.User | null | undefined,
    database: MinimalExpectedDatabase<T, S>
): boolean {
    const [, setUser] = useContext(UserDocumentContext);
    const [loadingUserFromDatabase, setLoadingUserFromDatabase] = useState(true);

    useEffect(() => {
        let unsubscribe: () => void | undefined;
        if (firebaseUser != null) {
            unsubscribe = subscribeForUserDocument(database, firebaseUser.uid, (document) => {
                if (document != null) {
                    setUser(document);
                }

                setLoadingUserFromDatabase(false);
            });
        } else {
            setUser(undefined);
        }

        return (): void => {
            if (unsubscribe) {
                unsubscribe();

                // Reset to the original state
                setUser(undefined);
                setLoadingUserFromDatabase(true);
            }
        };
    }, [firebaseUser, database, setUser]);

    return loadingUserFromDatabase;
}
