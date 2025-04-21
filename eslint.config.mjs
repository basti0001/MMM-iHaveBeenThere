import eslintPluginJs from '@eslint/js'
import eslintPluginStylistic from '@stylistic/eslint-plugin'
import globals from 'globals'
import { flatConfigs as importConfigs } from 'eslint-plugin-import-x'

const config = [
  eslintPluginJs.configs.recommended,
  eslintPluginStylistic.configs.recommended,
  importConfigs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        Log: 'readonly',
        Module: 'readonly',
        am5: 'readonly',
        am5geodata_worldLow: 'readonly',
        am5map: 'readonly',
        am5themes_Animated: 'readonly',
      },
    },
    rules: {
      '@stylistic/array-element-newline': ['error', 'consistent'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
      '@stylistic/object-property-newline': 'off',
      '@stylistic/padded-blocks': ['error', 'never'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      'capitalized-comments': 'off',
      'consistent-this': 'off',
      'line-comment-position': 'off',
      'max-lines-per-function': ['error', 150],
      'max-statements': ['error', 50],
      'no-await-in-loop': 'off',
      'no-inline-comments': 'off',
      'no-magic-numbers': 'off',
      'no-param-reassign': 'off',
      'no-undef': 'warn',
      'one-var': 'off',
      'sort-keys': 'off',
      'strict': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
    rules: {
      '@stylistic/array-element-newline': 'off',
      '@stylistic/indent': ['error', 2],
      '@stylistic/padded-blocks': ['error', 'never'],
      'func-style': 'off',
      'max-lines-per-function': ['error', 100],
      'no-magic-numbers': 'off',
      'one-var': 'off',
      'prefer-destructuring': 'off',
    },
  },
]

export default config
