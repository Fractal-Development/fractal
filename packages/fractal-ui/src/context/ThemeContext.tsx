import React, { createContext, ReactNode } from 'react';
import { FractalTheme } from '../themes/FractalTheme';
import { lightFractalTheme } from '../themes/templates/lightFractalTheme';

export const ThemeContext = createContext<FractalTheme>(lightFractalTheme);

export interface ThemeProviderProps {
    children: ReactNode | Array<ReactNode>;
    theme: FractalTheme;
}

export function ThemeProvider({ children, theme }: ThemeProviderProps): JSX.Element {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
