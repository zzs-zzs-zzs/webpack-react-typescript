const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // 入口文件
  entry: path.join(__dirname, "../src/index.tsx"),
  // 输出配置
  output: {
    // 输出的每个js文件名称
    filename: "static/js/[name].js",
    // 输出路径
    path: path.join(__dirname, "../dist"),
    // webpack4的clean-webpack-plugin，每次build时候清空dist文件，webpack内置了
    clean: true,
    // 打包文件的公共前缀路径
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            // 预设顺序由后往前执行，限制性ts在执行jsx
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript",
            ]
          }
        }
      }
    ],
  },
  resolve: {
    // extensions作用：在引入模块时候不带文件后缀时候，会读取数组配置查找后缀
    // ts文件不支持引入.ts .tsx为后缀的文件
    extensions: [".js", ".tsx", ".ts"],
  },
  // 插件
  plugins: [
    // webpack需要把最终构建好的静态资源放在html中，才能在浏览器中执行，使用HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // 取定义root节点的模板
      template: path.resolve(__dirname, "../public/index.html"),
      // 自动注入静态资源
      inject: true,
    })
  ]
}