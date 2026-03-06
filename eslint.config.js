const js = require('@eslint/js');
const globals = require('globals');

const styleRules = {
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^(err|req|res|next)$' }],
    'no-mixed-requires': ['error', { 'allowCall': true }],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'indent': 'error',
    'linebreak-style': ['error', 'unix'],
    'semi': ['error', 'always'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'keyword-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
    'no-mixed-spaces-and-tabs': 'error',
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
    'one-var': ['error', { 'initialized': 'never' }],
    'no-var': 'error'
};

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node
            }
        },
        ignores: ['/coverage/**'],
        rules: styleRules
    },
    {
        files: ['test/**', 'examples/**'],
        ignores: ['/coverage/**'],
        languageOptions: {
            globals: {
                ...globals.mocha,
                expect: 'readonly',
                sinon: 'readonly'
            }
        }
    }
];