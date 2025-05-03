import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Target JavaScript and JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Enable ES Modules
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Disable React in scope rule for React 17+
      "react/jsx-uses-react": "off", // Disable for JSX runtime
      "react/jsx-uses-vars": "error", // Ensure variables are marked as used
    },
  },

  // Include recommended configurations
  pluginJs.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      "react/react-in-jsx-scope": "off", // Avoid requiring React in scope for JSX
    },
  },
];
