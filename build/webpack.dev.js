const path = require("path")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

module.exports = merge(baseConfig, {
  // 开发模式，打包更快，省掉优化代码
  mode: "development",
  // 源码调试
  devtool: "eval-cheap-module-source-map",
  devServer: {
    port: "4200",
    // gzip压缩，开发环境部开启
    compress: false,
    // 热更新
    hot: true,
    // 解决history 404问题
    historyApiFallback: true,
    static: {
      // 托管静态资源public文件夹
      directory: path.join(__dirname, "../public")
    }
  }
})