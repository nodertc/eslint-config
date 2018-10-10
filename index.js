'use strict';

const styleRules = require('eslint-config-airbnb-base/rules/style').rules;

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:import/recommended',
    'plugin:jsdoc/recommended',
    'prettier',
    'prettier/unicorn'
  ],
  plugins: [
    'no-use-extend-native',
    'unicorn',
    'promise',
    'node',
    'import',
    'security',
    'jsdoc',
    'prettier'
  ],
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
    ecmaFeatures: {
      jsx: false,
    }
  },
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'es5'
    }, { withNodeModules: false }],

    // Enforce valid JSDoc comments.
    // https://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': ['error', {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
    }],
    // Require JSDoc comments.
    // https://eslint.org/docs/rules/require-jsdoc
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: false,
        FunctionExpression: true,
      },
    }],
    // Allow use of functions before they are defined.
    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true,
    }],
    // Allow to reassign props for sequelize db models.
    // https://eslint.org/docs/rules/no-param-reassign
    'no-param-reassign': ['error', { 'props': false }],
    // Allow for-of loops in nodejs.
    // https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax':  styleRules['no-restricted-syntax'].filter((rule) => {
      if (rule && typeof rule === 'object') {
        if (rule.selector === 'ForOfStatement') {
          return false
        }
      }
      return true
    }),
    // Require to use strict mode in nodejs.
    // https://eslint.org/docs/rules/strict
    'strict': ['error', 'global'],

    // Mix rules with recommended set.
    'promise/always-return': 'off',
    'promise/no-callback-in-promise': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',

    // Copy-pasted rules from xo.
    'import/extensions': ['error', {
      js: 'never',
    }],
    'import/namespace': ['error', { allowComputed: true }],
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/newline-after-import': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    // Incompatible with multiple node_modules folders.
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-as-default': 'error',
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/order': 'error',
    'import/no-cycle': 'error',

    // Enable due to security reasons.
    'unicorn/no-unsafe-regex': 'error',
    // Disable Browser-related rule.
    'unicorn/prefer-add-event-listener': 'off',

    'node/exports-style': ['error', 'module.exports'],
    // Use eslint-plugin-import instead.
    'node/no-extraneous-require': 'off',
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',

    // Already checked by eslint-plugin-unicorn.
    'security/detect-unsafe-regex': 'off',
    // Enable more strict alerts.
    'security/detect-buffer-noassert': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    // Disable due to unused feature.
    'security/detect-possible-timing-attacks': 'off',
    // Disable due to many false-positive warnings.
    'security/detect-object-injection': 'off',

    'jsdoc/newline-after-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-description-complete-sentence': 'warn',
    // Doesn't resolve types properly.
    'jsdoc/no-undefined-types': 'off'
  }
}
