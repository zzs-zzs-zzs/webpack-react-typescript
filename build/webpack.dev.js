const path = require("path")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

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
      directory: path.join(__dirname, "../public"),
    },
  },
  plugins: [
    // 添加热更新插件，不添加这个plugin，修改app.ts，会刷新浏览器
    new ReactRefreshWebpackPlugin(),
    // eslint
    new EslintWebpackPlugin({
      files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx"],
      extensions: ["js", "ts", "tsx"],
    }),
    // 强制检查ts错误
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
})
