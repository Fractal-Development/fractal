import React, { createContext, useState } from 'react';
import { createAuthenticationState } from '../types/AuthenticationState';
export const AuthenticationStateContext = createContext([
    createAuthenticationState(),
    () => {
        return;
    }
]);
export function AuthenticationStateProvider({ children }) {
    const handleState = useState(createAuthenticationState());
    return React.createElement(AuthenticationStateContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=AuthenticationStateProvider.js.map