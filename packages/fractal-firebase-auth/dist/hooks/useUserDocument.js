import { useContext } from 'react';
import { UserDocumentContext } from '../context/UserDocumentProvider';
export function useUserDocument() {
    const [user] = useContext(UserDocumentContext);
    return user;
}
//# sourceMappingURL=useUserDocument.js.map