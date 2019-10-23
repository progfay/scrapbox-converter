module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'project': './tsconfig.json'
  },
  'plugins': ['@typescript-eslint'],
  'rules': {
    'no-unused-vars': ["error", { "varsIgnorePattern": "^pragma$" }],
    '@typescript-eslint/no-unused-vars': ["error", { "varsIgnorePattern": "^pragma$" }]
  }
}