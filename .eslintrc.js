// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    // project: './tsconfig.json',
    // tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  rules: {
    'no-param-reassign': ['error', { props: false }],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': [0],
    'max-len': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-newline': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    // 'no-console': 'error',
    // '@typescript-eslint/ban-types': [
    //   'error',
    //   {
    //     extendDefaults: true,
    //     types: {
    //       '{}': false,
    //     },
    //   },
    // ],
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-empty-interface': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // 'no-constant-condition': 'error',
    // 'no-dupe-else-if': 'error',
    // 'no-dupe-keys': 'error',
    // 'no-empty': 'error',
    // 'no-extra-semi': 'error',
    // 'no-extra-boolean-cast': 'error',
    // 'no-func-assign': 'error',
    // ,
    //
    // // Best practice rules
    // 'block-scoped-var': 'error',
    // 'default-param-last': ['error'],
    // 'dot-notation': ['error', { allowKeywords: false }],
    // 'no-alert': 'error',
    // 'no-else-return': ['error', { allowElseIf: false }],
    // 'no-empty-function': 'error',
    // 'no-empty-pattern': 'error',
    // 'no-eq-null': 'error',
    // 'no-multi-spaces': 'error',
    // 'no-new': 'error',
    // 'no-useless-return': 'error',
    // 'require-await': 'error',
    // 'react/prop-types': 'off',
  },
};
