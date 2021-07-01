import React, { createContext } from 'react';
import { lightFractalTheme } from '../themes/templates/lightFractalTheme';
export const ThemeContext = createContext(lightFractalTheme);
export function ThemeProvider({ children, theme }) {
    return React.createElement(ThemeContext.Provider, { value: theme }, children);
}
//# sourceMappingURL=ThemeContext.js.map