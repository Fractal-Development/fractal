import React from 'react';
import { lightFractalTheme, darkFractalTheme } from '../themes';
import { useThemeIdentifier, ThemeProvider } from '../context';
import { PlatformAppearanceDetails } from './platform';
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