module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    ignorePatterns: ['**/*.test.js', '**/*.spec.js', '**/*.test.ts', '**/*.spec.ts'],
};