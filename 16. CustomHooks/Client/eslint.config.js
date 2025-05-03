import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' }
      ],
      'react/self-closing-comp': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  },
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
];
