import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { AuthenticationState } from '../types/AuthenticationState';
export declare type AuthenticationStateContextType = [AuthenticationState, Dispatch<SetStateAction<AuthenticationState>>];
export declare const AuthenticationStateContext: React.Context<AuthenticationStateContextType>;
interface AuthenticationStateProviderProps {
    children: ReactNode;
}
export declare function AuthenticationStateProvider({ children }: AuthenticationStateProviderProps): JSX.Element;
export {};
