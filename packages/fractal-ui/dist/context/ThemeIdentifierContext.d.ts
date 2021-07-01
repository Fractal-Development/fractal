import React, { ReactNode, Dispatch, SetStateAction } from 'react';
export declare type ThemeIdentifierType = 'light' | 'dark';
export declare type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];
export declare const ThemeIdentifierContext: React.Context<ThemeIdentifierContextType>;
interface ThemeIdentifierProviderProps {
    children: ReactNode;
    handleThemeManually: boolean;
}
export declare function ThemeIdentifierProvider({ children, handleThemeManually }: ThemeIdentifierProviderProps): JSX.Element;
export {};
