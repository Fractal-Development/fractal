import React, { ReactNode } from 'react';

import { useThemeIdentifier, ThemeProvider } from '../context';
import { lightFractalTheme, FractalTheme, darkFractalTheme } from '../themes';
import { PlatformAppearanceDetails } from './platform';

export interface ThemeContentProps {
    children: ReactNode;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}

export function ThemeContent({ children, lightTheme, darkTheme }: ThemeContentProps): JSX.Element {
    const themeIdentifier = useThemeIdentifier();
    const finalLightTheme = lightTheme ?? lightFractalTheme;
    const finalDarkTheme = darkTheme ?? darkFractalTheme;
    const theme = themeIdentifier === 'light' ? finalLightTheme : finalDarkTheme;

    return (
        <ThemeProvider theme={theme}>
            <PlatformAppearanceDetails />
            {children}
        </ThemeProvider>
    );
}
