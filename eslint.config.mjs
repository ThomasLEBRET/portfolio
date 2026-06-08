import svelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import svelteParser from 'svelte-eslint-parser';

export default [
  {
    ignores: [
      '.svelte-kit/**',
      'build/**',
      'node_modules/**',
      'public/**'
    ],
  },
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'start' }],
      'complexity': ['warn', 10],
      'svelte/no-navigation-without-resolve': 'off',
    },
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
];
