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
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // 禁止变量声明与外层作用域的变量同名
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
    // 禁用一元操作符 ++ 和 --
    "no-plusplus": 0,
    // 禁止使用特定的语法
    "no-restricted-syntax": 0,
    // 只有1个导出时，用export default
    "import/prefer-default-export": 0,
    // 强制使用一致的换行风格
    "linebreak-style": 0,
    // 使用驼峰
    camelcase: 0,
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unreachable": "error",
    // 指定程序中允许的最大环路复杂度
    complexity: ["error", { max: 15 }],
    // 禁止使用多个空格
    "no-multi-spaces": "error",
    // 强制函数最大代码行数 - 60行
    "max-lines-per-function": ["error", 600],
    // 要求使用 let 或 const 而不是 var
    "no-var": "error",
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 2,
    // ts
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-var-requires": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
