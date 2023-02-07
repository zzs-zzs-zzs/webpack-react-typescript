const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  // 开发模式，打包更快，省掉优化代码
  mode: "production",
})