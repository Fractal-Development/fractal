import { ReactElement, useEffect, useState } from 'react';

/**
 * TODO:
 * Add a way to change the authenticationState with props for listener based authentication.
 */

export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
}

type AuthenticationState = 'loading' | 'accessIsAllowed' | 'accessIsNotAllowed';

export function AuthenticationCheck({
    loadingComponent,
    children,
    redirectComponent,
    checkIfShouldAllowAccess,
    onCredentialLoadFailed
}: CredentialValidatorProps): ReactElement {
    const [authenticationState, setAuthenticationState] = useState<AuthenticationState>('loading');

    useEffect(() => {
        checkIfShouldAllowAccess()
            .then((isValid) => {
                return setAuthenticationState(isValid ? 'accessIsAllowed' : 'accessIsNotAllowed');
            })
            .catch((error) => {
                console.error(error.message);
                onCredentialLoadFailed?.(error.message);
                setAuthenticationState('accessIsNotAllowed');
            });
    }, [checkIfShouldAllowAccess, onCredentialLoadFailed]);

    switch (authenticationState) {
        case 'loading':
            return loadingComponent;
        case 'accessIsAllowed':
            return children;
        case 'accessIsNotAllowed':
            return redirectComponent;
    }
}

AuthenticationCheck.displayName = 'AuthenticationCheck';
