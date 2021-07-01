import { TextStyle } from './TextStyle';

export interface FractalThemeColors {
    background: string;
    foreground: string;
    text: string;
    textField: string;
    placeholder: string;
    label: string;
    separator: string;
    black: string;
    white: string;
    transparent: string;
    // Main Colors
    mainInteractiveColor100: string;
    mainInteractiveColor200: string;
    mainInteractiveColor300: string;
    mainInteractiveColor400: string;
    mainInteractiveColor: string;
    mainInteractiveColor600: string;
    mainInteractiveColor700: string;
    mainInteractiveColor800: string;
    mainInteractiveColor900: string;
    // Alternative Colors
    alternativeInteractiveColor100: string;
    alternativeInteractiveColor200: string;
    alternativeInteractiveColor300: string;
    alternativeInteractiveColor400: string;
    alternativeInteractiveColor: string;
    alternativeInteractiveColor600: string;
    alternativeInteractiveColor700: string;
    alternativeInteractiveColor800: string;
    alternativeInteractiveColor900: string;
    // Success Colors
    successInteractiveColor100: string;
    successInteractiveColor200: string;
    successInteractiveColor300: string;
    successInteractiveColor400: string;
    successInteractiveColor: string;
    successInteractiveColor600: string;
    successInteractiveColor700: string;
    successInteractiveColor800: string;
    successInteractiveColor900: string;
    // Warning
    warningInteractiveColor100: string;
    warningInteractiveColor200: string;
    warningInteractiveColor300: string;
    warningInteractiveColor400: string;
    warningInteractiveColor: string;
    warningInteractiveColor600: string;
    warningInteractiveColor700: string;
    warningInteractiveColor800: string;
    warningInteractiveColor900: string;
    // Danger,
    dangerInteractiveColor100: string;
    dangerInteractiveColor200: string;
    dangerInteractiveColor300: string;
    dangerInteractiveColor400: string;
    dangerInteractiveColor: string;
    dangerInteractiveColor600: string;
    dangerInteractiveColor700: string;
    dangerInteractiveColor800: string;
    dangerInteractiveColor900: string;
    // Content
    contentInteractiveColor100: string;
    contentInteractiveColor200: string;
    contentInteractiveColor300: string;
    contentInteractiveColor400: string;
    contentInteractiveColor: string;
    contentInteractiveColor600: string;
    contentInteractiveColor700: string;
    contentInteractiveColor800: string;
    contentInteractiveColor900: string;
}

export interface FractalThemeSpacings {
    xs: number;
    s: number;
    m: number;
    lg: number;
    xl: number;
}

export interface FractalThemeBorderRadius {
    xs: number;
    s: number;
    m: number;
    lg: number;
    xl: number;
}

export interface FractalThemeSizes {
    interactiveItemHeight: number;
    loadingComponentHeightForButton: number;
    textFieldIconSize: number;
    textFieldHeight: number;
    checkBoxSize: number;
    radioButtonSize: number;
    segmentedControlSize: number;
    audioControlToggleButtonSize: number;
    audioControlToggleButtonIconSize: number;
}

export interface FractalThemeShadows {
    mainShadow: string;
    thumbShadow: string;
}

export interface FractalThemeTextVariants {
    normal: TextStyle;
    title: TextStyle;
    title2: TextStyle;
    title3: TextStyle;
    subtitle: TextStyle;
    placeholder: TextStyle;
    label: TextStyle;
    small: TextStyle;
    smallLabel: TextStyle;
    button: TextStyle;
    textButton: TextStyle;
}

export interface FractalTheme {
    colors: FractalThemeColors;
    spacings: FractalThemeSpacings;
    borderRadius: FractalThemeBorderRadius;
    sizes: FractalThemeSizes;
    shadows: FractalThemeShadows;
    textVariants: FractalThemeTextVariants;
}
