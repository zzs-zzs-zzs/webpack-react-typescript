const { merge } = require("webpack-merge")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(baseConfig, {
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
    }),
    new MiniCssExtractPlugin({
      // 抽离css的输出目录和名称
      filename: "static/css/[name].css",
    })
  ],
})