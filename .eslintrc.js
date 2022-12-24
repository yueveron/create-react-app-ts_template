module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'react-hooks'],
  env: {
    node: true,
    mocha: true,
    jest: true,
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    JSX: true,
    React: true,
    window: true,
    NodeJS: true,
    Promise: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // "error"或2- 开启规则，使用错误级别的错误：error(当被触发的时候，程序会退出)
  rules: {
    semi: 'error', // 结尾分号
    quotes: ['error', 'single'], // 单引号
    'no-trailing-spaces': ['error', { skipBlankLines: true }], // 去除结尾空格
  },
};
