module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules:{
    'no-unused-vars':[0],
    'semi':[0]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
}