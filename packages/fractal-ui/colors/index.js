function createFractalColors(properties, baseColors) {
  const newColors = JSON.parse(JSON.stringify(baseColors))
  const keys = Object.keys(baseColors)
  keys.forEach((key) => {
    Object.assign(newColors[key], properties[key])
  })
  return newColors
}

exports.createFractalColors = createFractalColors

exports.fractalColors = {
  background: { light: '#F7F7F7', dark: '#181a21' },
  foreground: {
    light: '#FFF',
    dark: '#20232c',
  },
  text: { light: '#000', dark: '#FFF' },
  textField: { light: '#F7F7F7', dark: '#181a21' },
  placeholder: { light: '#C3C3C3', dark: '#2b2f3b' },
  label: { light: '#999', dark: '#565e76' },
  separator: { light: '#F7F7F7', dark: '#181a21' },
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
  primary: {
    100: '#CEEDFD',
    200: '#9ED7FC',
    300: '#6DBAF7',
    400: '#489EF0',
    500: '#1074E6',
    600: '#0B59C5',
    700: '#0842A5',
    800: '#052E85',
    900: '#03216E',
  },
  secondary: {
    100: '#FEEED4',
    200: '#FDD8AA',
    300: '#FABB7F',
    400: '#F69F5E',
    500: '#F0732B',
    600: '#CE541F',
    700: '#AC3A15',
    800: '#8B240D',
    900: '#731408',
  },
  success: {
    100: '#DAFCD0',
    200: '#ADF9A3',
    300: '#76EE73',
    400: '#4EDD58',
    500: '#1CC738',
    600: '#14AB3B',
    700: '#0E8F3B',
    800: '#087338',
    900: '#055F35',
  },
  warning: {
    100: '#FEF7CD',
    200: '#FEED9B',
    300: '#FDE069',
    400: '#FBD244',
    500: '#FABD07',
    600: '#D79C05',
    700: '#B37E03',
    800: '#906202',
    900: '#774D01',
  },
  danger: {
    100: '#FDE3D5',
    200: '#FCC1AB',
    300: '#F79780',
    400: '#F06E60',
    500: '#E6312E',
    600: '#C5212D',
    700: '#A5172D',
    800: '#850E2B',
    900: '#6E082A',
  },
  content: {
    light: {
      100: '#FFF',
      200: '#999',
      300: '#C3C3C3',
      400: '#C3C3C3',
      500: '#F7F7F7',
      600: '#C3C3C3',
      700: '#C3C3C3',
      800: '#999',
      900: '#FFF',
    },
    dark: {
      100: '#000',
      200: '#565e76',
      300: '#2b2f3b',
      400: '#2b2f3b',
      500: '#181a21',
      600: '#2b2f3b',
      700: '#2b2f3b',
      800: '#565e76',
      900: '#000',
    },
  },
}
