import React, { ReactNode } from 'react';
import { FractalTheme } from '../themes/FractalTheme';
export declare const ThemeContext: React.Context<FractalTheme>;
export interface ThemeProviderProps {
    children: ReactNode | Array<ReactNode>;
    theme: FractalTheme;
}
export declare function ThemeProvider({ children, theme }: ThemeProviderProps): JSX.Element;
