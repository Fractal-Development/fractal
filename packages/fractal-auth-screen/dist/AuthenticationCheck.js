import { useEffect } from 'react';
import { useControllableState } from '@bma98/fractal-ui';
export function AuthenticationCheck({ loadingComponent, children, redirectComponent, checkIfShouldAllowAccess, onCredentialLoadFailed, state }) {
    const [authenticationState, setAuthenticationState] = useControllableState(state, 'loading');
    useEffect(() => {
        checkIfShouldAllowAccess === null || checkIfShouldAllowAccess === void 0 ? void 0 : checkIfShouldAllowAccess().then((isValid) => setAuthenticationState(isValid ? 'accessIsAllowed' : 'accessIsNotAllowed')).catch((error) => {
            onCredentialLoadFailed === null || onCredentialLoadFailed === void 0 ? void 0 : onCredentialLoadFailed(error.message);
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
//# sourceMappingURL=AuthenticationCheck.js.map