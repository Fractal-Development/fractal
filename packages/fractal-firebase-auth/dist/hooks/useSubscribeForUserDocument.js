import { useContext, useEffect, useState } from 'react';
import { subscribeForUserDocument } from '../firebase/users/subscribeForUserDocument';
import { UserDocumentContext } from '../context/UserDocumentProvider';
export function useSubscribeForUserDocument(firebaseUser, database) {
    const [, setUser] = useContext(UserDocumentContext);
    const [loadingUserFromDatabase, setLoadingUserFromDatabase] = useState(true);
    useEffect(() => {
        let unsubscribe;
        if (firebaseUser != null) {
            unsubscribe = subscribeForUserDocument(database, firebaseUser.uid, (document) => {
                if (document != null) {
                    setUser(document);
                }
                setLoadingUserFromDatabase(false);
            });
        }
        else {
            setUser(undefined);
        }
        return () => {
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
//# sourceMappingURL=useSubscribeForUserDocument.js.map