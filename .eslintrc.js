module.exports = {
    extends: ['universe/native'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 140,
                trailingComma: 'none',
                singleQuote: true,
                jsxSingleQuote: true,
                tabWidth: 4,
                proseWrap: 'never'
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/order': 'off',
        '@typescript-eslint/array-type': 'off'
    }
};
