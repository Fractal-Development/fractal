import { LoadingBackground } from '@bma98/fractal-ui';
import React, { ReactNode, useEffect } from 'react';
import { useAuthenticationState } from '../../hooks/useAuthenticationState';
import { useUserDocument } from '../../hooks';

export interface CreateUserScreenProps {
    createUser: (id: string, email: string) => void;
    children?: ReactNode;
}

export function CreateUserScreen({ createUser, children }: CreateUserScreenProps): JSX.Element {
    const { firebaseUser } = useAuthenticationState();
    const userDocument = useUserDocument();

    useEffect(() => {
        if (firebaseUser != null && userDocument === undefined) {
            createUser(firebaseUser.uid, firebaseUser.email ?? '');
        }
    }, [createUser, firebaseUser, userDocument]);

    return <>{children}</> ?? <LoadingBackground />;
}
