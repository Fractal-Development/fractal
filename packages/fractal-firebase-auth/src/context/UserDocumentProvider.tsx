import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type UserDocumentContextType = [unknown, Dispatch<SetStateAction<unknown>>];

export const UserDocumentContext = createContext<UserDocumentContextType>([
    undefined,
    () => {
        return;
    }
]);

interface UserDocumentProviderProps {
    children: ReactNode;
}

export function UserDocumentProvider({ children }: UserDocumentProviderProps): JSX.Element {
    const handleState = useState<unknown | undefined | null>(undefined);
    return <UserDocumentContext.Provider value={handleState}>{children}</UserDocumentContext.Provider>;
}
