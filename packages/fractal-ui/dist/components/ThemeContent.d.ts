import { ReactNode } from 'react';
import { FractalTheme } from '../themes/FractalTheme';
export interface ThemeContentProps {
    children: ReactNode;
    handleThemeManually?: boolean;
    lightTheme?: FractalTheme;
    darkTheme?: FractalTheme;
}
export declare function ThemeContent({ children, lightTheme, darkTheme }: ThemeContentProps): JSX.Element;
