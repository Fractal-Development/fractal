const { fractalColors } = require('@fractal-software/fractal-ui/colors');

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', '../../packages/fractal-ui/dist/**/*.{js,jsx,ts,tsx}'],
    plugins: [],
    theme: {
        extend: {
            colors: {
                ...fractalColors
            }
        }
    },
    darkMode: 'class'
};
