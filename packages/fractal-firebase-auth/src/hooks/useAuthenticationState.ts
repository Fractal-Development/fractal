import { AuthenticationState } from '../types';
import { useContext } from 'react';
import { AuthenticationStateContext } from '../context';

export function useAuthenticationState(): AuthenticationState {
    const [authenticationState] = useContext(AuthenticationStateContext);
    return authenticationState;
}
