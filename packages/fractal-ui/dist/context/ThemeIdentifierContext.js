import React, { createContext, useState, useEffect } from 'react';
import { usePlatformColorScheme } from '../hooks/usePlatformColorScheme';
const placeholderFunction = () => {
    return;
};
const defaultValue = ['light', placeholderFunction];
export const ThemeIdentifierContext = createContext(defaultValue);
export function ThemeIdentifierProvider({ children, handleThemeManually }) {
    const systemColorScheme = usePlatformColorScheme();
    const handleState = useState(systemColorScheme);
    const setThemeIdentifier = handleState[1];
    useEffect(() => {
        if (!handleThemeManually) {
            setThemeIdentifier(systemColorScheme);
        }
    }, [handleThemeManually, systemColorScheme, setThemeIdentifier]);
    return React.createElement(ThemeIdentifierContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=ThemeIdentifierContext.js.map