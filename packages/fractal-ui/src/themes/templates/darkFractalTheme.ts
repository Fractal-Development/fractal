import { black } from '../../colors/presets/black';
import { FractalThemeNavigationBar, FractalThemeTabBar } from '../FractalTheme';
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
    // Content
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

export const darkNavigationBarTheme: FractalThemeNavigationBar = {
    ...lightNavigationBarTheme,
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white'
    },
    backgroundColor: black.base
};

export const darkTabBarTheme: FractalThemeTabBar = {
    ...lightTabBarTheme,
    backgroundColor: black.base
};

export const darkFractalTheme = createFractalTheme({
    colors: {
        ...darkColors
    },
    navigationBar: darkNavigationBarTheme,
    tabBar: darkTabBarTheme
});
