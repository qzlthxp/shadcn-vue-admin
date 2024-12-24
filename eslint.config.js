import globals from 'globals';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      import: pluginImport,
      vue: pluginVue,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
        },
        node: {
          moduleDirectory: ['node_modules', 'src'],
        },
      },
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
      'no-unused-vars': ['error', { ignoreRestSiblings: true }],
      //import
      'import/no-unresolved': 'error',
      // vue
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    ignores: ['dist', '.vscode'],
  },
  eslintPluginPrettierRecommended,
];
