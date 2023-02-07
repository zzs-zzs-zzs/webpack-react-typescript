const isDev = process.env.NODE_ENV === "development"

module.exports = {
  // 预设顺序由后往前执行，限制性ts在执行jsx
  presets: [
    [
      "@babel/preset-env",
      {
        // 设置兼容目标浏览器版本
        targets: {
         chrome: 35,
         ie: 9
        },
        // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
        useBuiltIns: "usage",
        // 配置使用core-js低版本
        corejs: 3,
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      { legacy: true },
      isDev && require.resolve("react-refresh/babel"),
    ].filter(Boolean)
  ]
}