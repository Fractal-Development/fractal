import { memo, ReactElement, useEffect, useState } from 'react';

export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
}

type AuthenticationState = 'loading' | 'accessIsAllowed' | 'accessIsNotAllowed';

export const AuthenticationCheck = memo(
    ({
        loadingComponent,
        children,
        redirectComponent,
        checkIfShouldAllowAccess,
        onCredentialLoadFailed
    }: CredentialValidatorProps): ReactElement => {
        const [authenticationState, setAuthenticationState] = useState<AuthenticationState>('loading');

        useEffect(() => {
            checkIfShouldAllowAccess()
                .then((isValid) => {
                    setAuthenticationState(isValid ? 'accessIsAllowed' : 'accessIsNotAllowed');
                })
                .catch((error) => {
                    console.log(error.message);
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
);

AuthenticationCheck.displayName = 'AuthenticationCheck';
