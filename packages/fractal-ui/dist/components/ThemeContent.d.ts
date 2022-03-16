import { ReactNode } from 'react';
import { FractalTheme } from '../themes';
export interface ThemeContentProps {
    children: ReactNode;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}
export declare function ThemeContent({ children, lightTheme, darkTheme }: ThemeContentProps): JSX.Element;
