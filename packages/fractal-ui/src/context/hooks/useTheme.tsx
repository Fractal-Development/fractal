import { useContext } from 'react';

import { FractalTheme } from '../../themes/FractalTheme';
import { ThemeContext } from '../ThemeContext';

export function useTheme(): FractalTheme {
    return useContext(ThemeContext);
}
