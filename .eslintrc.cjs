module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'prettier'
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/prop-types': 'off',
    "react/jsx-max-props-per-line": ["warn", { "maximum": 1, "when": "multiline" }],
    "object-curly-newline": ["warn", { "multiline": true, "consistent": true }],
  }
};
