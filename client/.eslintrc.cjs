module.exports = {
  root: true,
  env: { browser: true, es2020: true ,node: true,},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn', 
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
      rules: {
        // Disable eslint for specific lines in these files
        'react/prop-types': 'off',
        'react/no-unknown-property': 'off',
        'no-unused-vars': 'off',
      },
    },
  ],
};
