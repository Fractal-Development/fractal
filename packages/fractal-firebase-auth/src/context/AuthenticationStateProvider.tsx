import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { AuthenticationState, createAuthenticationState } from '../types/AuthenticationState';

export type AuthenticationStateContextType = [AuthenticationState, Dispatch<SetStateAction<AuthenticationState>>];

export const AuthenticationStateContext = createContext<AuthenticationStateContextType>([
    createAuthenticationState(),
    () => {
        return;
    }
]);

interface AuthenticationStateProviderProps {
    children: ReactNode;
}

export function AuthenticationStateProvider({ children }: AuthenticationStateProviderProps): JSX.Element {
    const handleState = useState(createAuthenticationState());
    return <AuthenticationStateContext.Provider value={handleState}>{children}</AuthenticationStateContext.Provider>;
}
