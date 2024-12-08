import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  stylistic.configs['recommended-flat'],
  {
    files: [
      '**/*.{js,mjs,cjs,vue}',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'no-var': 'error',
      'no-alert': 'error',
      'no-console': 'warn',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-duplicate-imports': 'error',
      'no-inner-declarations': 'error',
      'no-use-before-define': 'error',
      'no-constant-condition': 'off',
      'camelcase': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'eqeqeq': 'error',
      // stylistic
      '@stylistic/semi': ['error', 'always'],
    },
  },
  {
    ignores: [
      'dist',
      '.vscode',
    ],
  },
];
