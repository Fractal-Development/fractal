import { blue, orange, green, yellow, red, white } from '../../colors';
import {
    FractalTheme,
    FractalThemeBorderRadius,
    FractalThemeColors,
    FractalThemeShadows,
    FractalThemeSizes,
    FractalThemeSpacings,
    FractalThemeTextVariants
} from '../FractalTheme';
import { systemFont } from '../systemFont';

export const colors: FractalThemeColors = {
    background: white.base400,
    foreground: white.base,
    text: white.base900,
    textField: white.base400,
    placeholder: white.base300,
    label: white.base200,
    separator: white.base400,
    black: 'black',
    white: 'white',
    transparent: 'transparent',
    // Main Colors
    mainInteractiveColor100: blue.base100,
    mainInteractiveColor200: blue.base200,
    mainInteractiveColor300: blue.base300,
    mainInteractiveColor400: blue.base400,
    mainInteractiveColor: blue.base,
    mainInteractiveColor600: blue.base600,
    mainInteractiveColor700: blue.base700,
    mainInteractiveColor800: blue.base800,
    mainInteractiveColor900: blue.base900,
    // Alternative Colors
    alternativeInteractiveColor100: orange.base100,
    alternativeInteractiveColor200: orange.base200,
    alternativeInteractiveColor300: orange.base300,
    alternativeInteractiveColor400: orange.base400,
    alternativeInteractiveColor: orange.base,
    alternativeInteractiveColor600: orange.base600,
    alternativeInteractiveColor700: orange.base700,
    alternativeInteractiveColor800: orange.base800,
    alternativeInteractiveColor900: orange.base900,
    // Success Colors
    successInteractiveColor100: green.base100,
    successInteractiveColor200: green.base200,
    successInteractiveColor300: green.base300,
    successInteractiveColor400: green.base400,
    successInteractiveColor: green.base,
    successInteractiveColor600: green.base600,
    successInteractiveColor700: green.base700,
    successInteractiveColor800: green.base800,
    successInteractiveColor900: green.base900,
    // Warning
    warningInteractiveColor100: yellow.base100,
    warningInteractiveColor200: yellow.base200,
    warningInteractiveColor300: yellow.base300,
    warningInteractiveColor400: yellow.base400,
    warningInteractiveColor: yellow.base,
    warningInteractiveColor600: yellow.base600,
    warningInteractiveColor700: yellow.base700,
    warningInteractiveColor800: yellow.base800,
    warningInteractiveColor900: yellow.base900,
    // Danger,
    dangerInteractiveColor100: red.base100,
    dangerInteractiveColor200: red.base200,
    dangerInteractiveColor300: red.base300,
    dangerInteractiveColor400: red.base400,
    dangerInteractiveColor: red.base,
    dangerInteractiveColor600: red.base600,
    dangerInteractiveColor700: red.base700,
    dangerInteractiveColor800: red.base800,
    dangerInteractiveColor900: red.base900,
    // Content
    contentInteractiveColor100: white.base100,
    contentInteractiveColor200: white.base200,
    contentInteractiveColor300: white.base300,
    contentInteractiveColor400: white.base300,
    contentInteractiveColor: white.base400,
    contentInteractiveColor600: white.base300,
    contentInteractiveColor700: white.base300,
    contentInteractiveColor800: white.base200,
    contentInteractiveColor900: white.base100
};

export const spacings: FractalThemeSpacings = {
    xs: 8,
    s: 12,
    m: 16,
    lg: 24,
    xl: 32
};

export const borderRadius: FractalThemeBorderRadius = {
    xs: 4,
    s: 8,
    m: 12,
    lg: 16,
    xl: 20
};

export const sizes: FractalThemeSizes = {
    interactiveItemHeight: 44,
    loadingComponentHeightForButton: 24,
    textFieldIconSize: 16,
    textFieldHeight: 44,
    checkBoxSize: 20,
    radioButtonSize: 20,
    segmentedControlSize: 32,
    audioControlToggleButtonSize: 32,
    audioControlToggleButtonIconSize: 16
};

export const shadows: FractalThemeShadows = {
    mainShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    thumbShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)'
};

export const textVariants: FractalThemeTextVariants = {
    normal: {
        fontSize: 17,
        fontWeight: 400,
        color: 'text',
        fontFamily: systemFont
    },
    title: {
        fontSize: 27,
        fontWeight: 700,
        color: 'text',
        fontFamily: systemFont
    },
    title2: {
        fontSize: 25,
        fontWeight: 700,
        color: 'text',
        fontFamily: systemFont
    },
    title3: {
        fontSize: 23,
        fontWeight: 700,
        color: 'text',
        fontFamily: systemFont
    },
    subtitle: {
        fontSize: 21,
        fontWeight: 600,
        color: 'text',
        fontFamily: systemFont
    },
    placeholder: {
        fontSize: 21,
        fontWeight: 600,
        color: 'placeholder',
        fontFamily: systemFont
    },
    label: {
        fontSize: 17,
        fontWeight: 400,
        color: 'label',
        fontFamily: systemFont
    },
    small: {
        fontSize: 15,
        fontWeight: 400,
        color: 'text',
        fontFamily: systemFont
    },
    smallLabel: {
        fontSize: 15,
        fontWeight: 400,
        color: 'label',
        fontFamily: systemFont
    },
    button: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: systemFont
    },
    textButton: {
        fontSize: 17,
        fontWeight: 400,
        color: 'mainInteractiveColor',
        fontFamily: systemFont
    }
};

export const lightFractalTheme: FractalTheme = {
    colors,
    spacings,
    borderRadius,
    sizes,
    shadows,
    textVariants
};
