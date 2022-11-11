import { useContext } from 'react';
import { AuthenticationStateContext } from '../context';
export function useAuthenticationState() {
    const [authenticationState] = useContext(AuthenticationStateContext);
    return authenticationState;
}
//# sourceMappingURL=useAuthenticationState.js.map