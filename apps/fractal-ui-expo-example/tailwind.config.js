const { fractalColors } = require('@fractal-software/fractal-ui/colors')

/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./App.tsx', '../../packages/fractal-ui/dist/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...fractalColors,
      },
    },
  },
  plugins: [],
}
