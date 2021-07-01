import React from 'react';
import { lightFractalTheme } from '../themes/templates/lightFractalTheme';
import { darkFractalTheme } from '../themes/templates/darkFractalTheme';
import { useThemeIdentifier } from '../context/hooks/useThemeIdentifier';
import { ThemeProvider } from '../context/ThemeContext';
import { PlatformAppearanceDetails } from './PlatformAppearanceDetails';
export function ThemeContent({ children, lightTheme, darkTheme }) {
    const themeIdentifier = useThemeIdentifier();
    const finalLightTheme = lightTheme !== null && lightTheme !== void 0 ? lightTheme : lightFractalTheme;
    const finalDarkTheme = darkTheme !== null && darkTheme !== void 0 ? darkTheme : darkFractalTheme;
    const theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PlatformAppearanceDetails, null),
        children));
}
//# sourceMappingURL=ThemeContent.js.map