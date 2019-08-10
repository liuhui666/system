module.exports = {
  extends: 'eslint-config-rnx',
  globals: {
    __DEV__: false,
    B: false,
    window: true,
    document: false,
    fetch: false,
  },
  rules: {
    'jsx-a11y/no-static-element-interactions': ['off'],
    'react/jsx-no-target-blank': ['off']
  }
}
