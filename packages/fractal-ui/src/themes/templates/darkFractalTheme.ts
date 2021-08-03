import { blue } from '../../colors';
import { black } from '../../colors/presets/black';
import { FractalThemeNavigationBar, FractalThemeTabBar } from '../FractalTheme';
import { systemFont } from '../systemFont';
import { createFractalTheme } from './createFractalTheme';

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

export const darkNavigationBarTheme: FractalThemeNavigationBar = {
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: black.base
    },
    height: 50,
    shadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
    textButton: {
        fontSize: 16,
        fontWeight: 400,
        color: blue.base,
        fontFamily: systemFont
    },
    iconButtonSize: 22,
    backgroundColor: black.base
};

export const darkTabBarTheme: FractalThemeTabBar = {
    tabBarItemText: {
        fontSize: 11,
        fontWeight: 500,
        color: blue.base,
        fontFamily: systemFont
    },
    verticalHeight: 61,
    horizontalWidth: 61,
    iOSVerticalHeight: 49,
    iOSHorizontalWidth: 49,
    backgroundColor: black.base,
    shadow: '0px -1px 1px rgba(0, 0, 0, 0.05)'
};

export const darkFractalTheme = createFractalTheme({
    colors: {
        ...darkColors
    },
    navigationBar: darkNavigationBarTheme,
    tabBar: darkTabBarTheme
});
