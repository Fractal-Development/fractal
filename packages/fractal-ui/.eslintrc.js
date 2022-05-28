const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unused-imports', 'promise'],
    extends: ['plugin:promise/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb/hooks', 'airbnb-typescript', 'prettier'],
    env: {
        es6: true,
        webextensions: true,
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            legacyDecorators: true,
            jsx: true
        },
        project: [path.join(__dirname, 'tsconfig.json')]
    },
    settings: {
        react: {
            version: '16.13.1'
        }
    },
    rules: {
        'no-prototype-builtins': 'off',
        'react/jsx-handler-names': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-param-reassign': 'off',
        'react/no-array-index-key': 'off',
        'no-nested-ternary': 'off',
        'react/require-default-props': 'off',
        'no-plusplus': 'off',
        'no-useless-return': 'off',
        'no-useless-escape': 'off',
        'react/destructuring-assignment': 'off',
        'class-methods-use-this': 'off',
        'react/jsx-no-useless-fragment': 'off'
    }
};
