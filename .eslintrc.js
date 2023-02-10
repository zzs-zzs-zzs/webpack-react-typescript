module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // 首个参数 0 = off, 1 = warn, 2 = error
    "no-shadow": "off",
    // 禁止使用拖尾逗号
    "comma-dangle": "off",
    // 禁止使用分号
    semi: [2, "never"],
    // 禁用行尾空白
    "no-trailing-spaces": [2],
    // 禁止直接调用 Object.prototypes 的内置属性
    "no-prototype-builtins": 0,
    // 强制一行的最大长度
    "max-len": 0,
    // 禁止对函数参数再赋值
    "no-param-reassign": 0,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 0,
    // 禁用一元操作符 ++ 和 --
    "no-plusplus": 0,
    // 禁止使用特定的语法
    "no-restricted-syntax": 0,
    // ts
    // 只有1个导出时，用export default
    "import/prefer-default-export": 0,
    "linebreak-style": 0,
    // 使用驼峰
    camelcase: 0,
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
  },
}
