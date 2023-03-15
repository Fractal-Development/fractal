import { useContext, useEffect } from 'react';
import { subscribeForAuthenticatedUser } from '../firebase/authentication/subscribeForAuthenticatedUser';
import { AuthenticationState, createAuthenticationState } from '../types/AuthenticationState';
import { AuthenticationStateContext } from '../context/AuthenticationStateProvider';

export function useSubscribeForAuthenticatedUser(): AuthenticationState {
    const [authenticationState, setAuthenticationState] = useContext(AuthenticationStateContext);

    useEffect(() => {
        const unsubscribe = subscribeForAuthenticatedUser((authState) => {
            setAuthenticationState(createAuthenticationState(authState));
        });
        return (): void => {
            unsubscribe();

            // Reset to the original state
            setAuthenticationState(createAuthenticationState());
        };
    }, [setAuthenticationState]);

    return authenticationState;
}
