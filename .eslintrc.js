module.exports = {
    extends: ['universe/native'],
    env: {
        'jest/globals': true
    },
    plugins: ['jest'],
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
        '@typescript-eslint/array-type': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }]
    }
};
