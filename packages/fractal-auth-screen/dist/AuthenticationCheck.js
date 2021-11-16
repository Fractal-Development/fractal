import { useEffect, useState } from 'react';
export function AuthenticationCheck({ loadingComponent, children, redirectComponent, checkIfShouldAllowAccess, onCredentialLoadFailed }) {
    const [authenticationState, setAuthenticationState] = useState('loading');
    useEffect(() => {
        checkIfShouldAllowAccess()
            .then((isValid) => {
            return setAuthenticationState(isValid ? 'accessIsAllowed' : 'accessIsNotAllowed');
        })
            .catch((error) => {
            console.error(error.message);
            onCredentialLoadFailed === null || onCredentialLoadFailed === void 0 ? void 0 : onCredentialLoadFailed(error.message);
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
//# sourceMappingURL=AuthenticationCheck.js.map