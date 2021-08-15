import { black } from '../../colors/presets/black';
import { createFractalTheme } from './createFractalTheme';
import { lightNavigationBarTheme, lightTabBarTheme } from './lightFractalTheme';
export const darkColors = {
    background: black.base400,
    foreground: black.base,
    text: black.base900,
    textField: black.base400,
    placeholder: black.base300,
    label: black.base200,
    separator: black.base400,
    //Content
    contentInteractiveColor100: black.base100,
    contentInteractiveColor200: black.base200,
    contentInteractiveColor300: black.base300,
    contentInteractiveColor400: black.base300,
    contentInteractiveColor: black.base400,
    contentInteractiveColor600: black.base300,
    contentInteractiveColor700: black.base300,
    contentInteractiveColor800: black.base200,
    contentInteractiveColor900: black.base100
};
export const darkNavigationBarTheme = Object.assign(Object.assign({}, lightNavigationBarTheme), { backgroundColor: black.base });
export const darkTabBarTheme = Object.assign(Object.assign({}, lightTabBarTheme), { backgroundColor: black.base });
export const darkFractalTheme = createFractalTheme({
    colors: Object.assign({}, darkColors),
    navigationBar: darkNavigationBarTheme,
    tabBar: darkTabBarTheme
});
//# sourceMappingURL=darkFractalTheme.js.map