/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  plugins: ['import', 'unused-imports', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.scss'],
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '#/**',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: false,
        ignore: ['.svg'],
      },
    ],
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'always',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_query'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      },
    ],
    'newline-before-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multi-spaces': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'cjs-export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'if',
        prev: '*',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: true,
        ignoreDeclarationSort: true,
      },
    ],
    'default-param-last': 'warn',
    'import/named': 'off',
    'func-names': ['off', 'as-needed'],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.json'],
    'import/resolver': {
      'babel-module': {},
    },
  },
};

module.exports = config;
