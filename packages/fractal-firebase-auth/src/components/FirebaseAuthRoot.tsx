import { AuthenticationStateProvider, UserDocumentProvider } from '../context';
import React from 'react';
import { Authenticate, AuthenticateProps } from './Authenticate';
import { MinimalUserData } from '../types';

export function FirebaseAuthRoot<UserType extends MinimalUserData>(props: AuthenticateProps<UserType>): JSX.Element {
    return (
        <AuthenticationStateProvider>
            <UserDocumentProvider>
                <Authenticate {...props} />
            </UserDocumentProvider>
        </AuthenticationStateProvider>
    );
}
