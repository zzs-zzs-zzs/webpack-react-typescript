const { merge } = require("webpack-merge")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const path = require("path")

module.exports = merge(baseConfig, {
  // 开发模式，打包更快，省掉优化代码
  mode: "production",
  plugins: [
    // 复制文件插件
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
          filter: source => {
            return !source.includes("index.html")
          }
        }
      ]
    })
  ]
})