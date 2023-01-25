import { ReactElement, useEffect } from 'react';
import { useControllableState } from '@fractal/fractal-ui';

type AuthenticationState = 'loading' | 'accessIsAllowed' | 'accessIsNotAllowed';

export interface CredentialValidatorProps {
    key: string;
    checkIfShouldAllowAccess?: () => Promise<boolean>;
    onCredentialLoadFailed?: (error: string) => void;
    children: ReactElement;
    loadingComponent: ReactElement;
    redirectComponent: ReactElement;
    state?: AuthenticationState;
}

export function AuthenticationCheck({
    loadingComponent,
    children,
    redirectComponent,
    checkIfShouldAllowAccess,
    onCredentialLoadFailed,
    state
}: CredentialValidatorProps): ReactElement {
    const [authenticationState, setAuthenticationState] = useControllableState<AuthenticationState>(state, 'loading');

    useEffect(() => {
        checkIfShouldAllowAccess?.()
            .then((isValid) => setAuthenticationState(isValid ? 'accessIsAllowed' : 'accessIsNotAllowed'))
            .catch((error) => {
                onCredentialLoadFailed?.(error.message);
                setAuthenticationState('accessIsNotAllowed');
            });
    }, [checkIfShouldAllowAccess, onCredentialLoadFailed, setAuthenticationState]);

    switch (authenticationState) {
        case 'loading':
            return loadingComponent;
        case 'accessIsAllowed':
            return children;
        case 'accessIsNotAllowed':
            return redirectComponent;
        default:
            return loadingComponent;
    }
}

AuthenticationCheck.displayName = 'AuthenticationCheck';
