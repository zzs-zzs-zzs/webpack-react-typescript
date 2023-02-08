const { merge } = require("webpack-merge")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const baseConfig = require("./webpack.base")
const path = require("path")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const PurgecssWebpackPlugin = require("purgecss-webpack-plugin")
const globAll = require("glob-all")
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
      filename: "static/css/[name].[contenthash:8].css",
    }),
    // 删除无用css文件
    new PurgecssWebpackPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, "../src")}/**/*.tsx`,
        `${path.join(__dirname, "../public/index.html")}`
      ]),
      safelist: {
        standard: [/^ant-/], // 过滤以ant-开头的类名，哪怕没用到也不删除
      }
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
    ],
    // 分割代码
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/, // 匹配node_modules的模块
          name: "vendor", // 提取文件命名，js后缀和chunkhash会自动加
          minChunks: 1, // 只要使用一次就提取
          chunks: "initial", // 只提取初始化就能获取的模块，不管异步
          minSize: 0, // 提取代码体积大于0
          priority: 1, // 提取优先级
        },
        common: { // 提取页面公共代码
          minChunks: 2, // 只要使用两次就提取出来
          chunks: 'initial', // 只提取初始化就能获取到的模块,不管异步的
          minSize: 0, // 提取代码体积大于0就提取出来
        },
        // 注意：权重要设置为最高，否则可能其他的 cacheGroups 会提前打包一部分样式文件
        styles: {
          name: 'styles',
          test: /\.(css|less)$/,
          chunks: 'all',
          enforce: true,
          priority: 20,
        }
      }
    }
  }
})