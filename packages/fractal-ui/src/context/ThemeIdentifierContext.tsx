import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { usePlatformColorScheme } from '../hooks/usePlatformColorScheme';

const placeholderFunction = () => {
    return;
};

export type ThemeIdentifierType = 'light' | 'dark';

export type ThemeIdentifierContextType = [ThemeIdentifierType, Dispatch<SetStateAction<ThemeIdentifierType>>];

const defaultValue: ThemeIdentifierContextType = ['light', placeholderFunction];

export const ThemeIdentifierContext = createContext<ThemeIdentifierContextType>(defaultValue);

interface ThemeIdentifierProviderProps {
    children: ReactNode;
    handleThemeManually: boolean;
}

export function ThemeIdentifierProvider({ children, handleThemeManually }: ThemeIdentifierProviderProps): JSX.Element {
    const systemColorScheme = usePlatformColorScheme();
    const handleState = useState<ThemeIdentifierType>(systemColorScheme);
    const setThemeIdentifier = handleState[1];

    useEffect(() => {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme);
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);

    return <ThemeIdentifierContext.Provider value={handleState}>{children}</ThemeIdentifierContext.Provider>;
}
