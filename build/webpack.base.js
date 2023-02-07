const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

console.log("NODE_ENV = ", process.env.NODE_ENV)
console.log("BASE_ENV = ", process.env.BASE_ENV)

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
      // ts | tsx 处理
      {
        //  只对项目src文件的ts,tsx进行loader解析
        include: [path.resolve(__dirname, "../src")],
        test: /.(ts|tsx)$/,
        use: ["thread-loader", "babel-loader"]
      },
      // css处理
      {
        include: path.resolve(__dirname, "../src"),
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      // less处理
      {
        include: path.resolve(__dirname, "../src"),
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      // 图片处理
      {
        test: /.(png|jpg|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 小于10k转成base64
            maxSize: 10 * 1027,
          }
        },
        generator: {
          // 文件输出目录和命名
          filename: "static/images/[name]p[ext]",
        }
      },
      // 匹配字体图标文件
      {
        test: /.(woff2?|eot|ttf|otf)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          }
        },
        generator:{
          filename: "static/fonts/[name][ext]",
        },
      },
      // 匹配媒体文件
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          }
        },
        generator:{
          filename: "static/media/[name][ext]",
        },
      },
    ],
  },
  resolve: {
    // extensions作用：在引入模块时候不带文件后缀时候，会读取数组配置查找后缀
    // ts文件不支持引入.ts .tsx为后缀的文件
    extensions: [".js", ".tsx", ".ts"],
    // 配置别名
    alias: {
      "@": path.join(__dirname, "../src")
    },
    // 查找第三方模块只在本项目的node_modules中查找
    modules: [path.resolve(__dirname, "../node_modules")]
  },
  // 插件
  plugins: [
    // webpack需要把最终构建好的静态资源放在html中，才能在浏览器中执行，使用HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      // 取定义root节点的模板
      template: path.resolve(__dirname, "../public/index.html"),
      // 自动注入静态资源
      inject: true,
    }),
    // 通过DefinePlugin，将环境变量注入
    new webpack.DefinePlugin({
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV)
    })
  ],
  cache: {
    // 使用文件缓存
    type: "filesystem"
  }
}