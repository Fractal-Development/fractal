import React, { ReactNode } from 'react';
import { FractalTheme } from '../themes/FractalTheme';
import { lightFractalTheme } from '../themes/templates/lightFractalTheme';
import { darkFractalTheme } from '../themes/templates/darkFractalTheme';
import { useThemeIdentifier } from '../context/hooks/useThemeIdentifier';
import { ThemeProvider } from '../context/ThemeContext';
import { PlatformAppearanceDetails } from './PlatformAppearanceDetails';

export interface ThemeContentProps {
    children: ReactNode;
    handleThemeManually?: boolean;
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
