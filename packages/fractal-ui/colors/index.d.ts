interface Color {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

interface ColorAppearance {
  light: string
  dark: string
}

export type FractalColors = {
  background: ColorAppearance
  foreground: ColorAppearance
  text: ColorAppearance
  textField: ColorAppearance
  placeholder: ColorAppearance
  label: ColorAppearance
  separator: ColorAppearance
  black: string
  white: string
  transparent: string
  primary: Color
  secondary: Color
  success: Color
  warning: Color
  danger: Color
  content: {
    light: Color
    dark: Color
  }
}

export declare function createFractalColors(
  properties: Partial<FractalColors>,
  baseColors: FractalColors
): FractalColors

export declare const fractalColors: FractalColors
