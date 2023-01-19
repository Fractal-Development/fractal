import { AuthenticationStateProvider, UserDocumentProvider } from '../context';
import React, { ReactNode } from 'react';

export interface FirebaseAuthRootProps {
    children: ReactNode;
}

export function FirebaseAuthRoot({ children }: FirebaseAuthRootProps): JSX.Element {
    return (
        <AuthenticationStateProvider>
            <UserDocumentProvider>{children}</UserDocumentProvider>
        </AuthenticationStateProvider>
    );
}
