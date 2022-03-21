module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended', 'plugin:import/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      alias: {
        map: [
          ['@web', './Web/src'],
          ['@tokens', './Tokens/build'],
          ['@components', './Web/src/Component']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    },
    react: {
      version: 'detect'
    }
  }
}
