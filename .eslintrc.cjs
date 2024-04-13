module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb/base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    ignorePatterns: ['dist', 'node_mosules', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'settings': {
            react: {
                version: 'latest',
            },
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'func-names': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'object-curly-newline': 'off',
        'arrow-body-style': 'off',
        'comma-dangle': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
    },
};
