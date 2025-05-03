import react from 'eslint-plugin-react';

export default [
  {
    ignores: ['node_modules/**']
  },
  {
    files: ['**/*.jsx', '**/*.js'],
    plugins: {
      react
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
      }
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Disable the rule for React 17+ JSX Transform
      'react/prop-types': 'off' // Disable PropTypes rule if not used
    }
  }
];
