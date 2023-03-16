import { MinimalUserData } from '..';
import { Document } from '@fractal-software/firebase-db-manager';
import { useContext } from 'react';
import { UserDocumentContext } from '../context/UserDocumentProvider';

export function useUserDocument<T extends MinimalUserData, S>(): Document<T, S> | undefined {
    const [user] = useContext(UserDocumentContext);
    return user as unknown as Document<T, S>;
}
