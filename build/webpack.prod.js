const { merge } = require("webpack-merge")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

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
      filename: "static/css/[name].[contenthash:8].css",
    })
  ],
  optimization: {
    minimizer: [
      // 压缩css
      new CssMinimizerWebpackPlugin(),
      // 压缩js
      new TerserWebpackPlugin({
        // 开启多线程压缩
        parallel: true,
        terserOptions: {
          compress: {
            // 删除log函数
            pure_funcs: ["console.log"],
          }
        }
      })
    ]
  }
})