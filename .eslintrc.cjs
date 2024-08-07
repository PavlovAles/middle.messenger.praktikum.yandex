module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb/base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            files: ['**/*.test.ts'],
            rules: {
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': 'off',
            },
        },
    ],
    ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs', 'vite.config.js', 'mochaSetup.js'],
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
        'no-underscore-dangle': 'off',
        'func-names': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'object-curly-newline': 'off',
        'arrow-body-style': 'off',
        'comma-dangle': 'off',
        'prefer-spread': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'prefer-destructuring': ['error', { object: false }],
        'no-restricted-syntax': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'no-param-reassign': [
            2,
            { props: true, ignorePropertyModificationsFor: ['proxyTarget', 'acc'] },
        ],
        'lines-between-class-members': [
            'error',
            {
                enforce: [{ blankLine: 'always', prev: 'method', next: 'method' }],
            },
        ],
        'class-methods-use-this': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: false }],
        '@typescript-eslint/lines-between-class-members': 'off',
    },
};
