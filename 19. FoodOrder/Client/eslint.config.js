import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      react: pluginReact,
      import: pluginImport
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': 'off', // Disable the no-unused-vars rule

      'import/extensions': [
        'off',
        'always',
        {
          js: 'always',
          jsx: 'always'
        }
      ]
    }
  }
];
