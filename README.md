# webpack-react-typescript

### 系统技术栈

1. 使用 webpack5，由 0 开始集成项目
2. 使用 react 框架
3. 使用 typescript
4. 使用 cross-env 注入环境变量
5. 使用 prettierrc 自动格式化
6. 使用 eslint 规范代码格式
7. 使用 lint-staged + husky + commitlint 对 commit 注释和暂存区代码检验
8. 使用 cz-customizable
9. 使用 styled-component 和 less 写样式
10. 使用 antd UI 框架
11. 使用 react-router-dom 路由
12. 使用 mobx 管理数据
13. 使用 axios 请求后台数据
14. 使用 ahooks
15. 使用 source-map 定位生产包源码，可以将 error.stack 赋值给 src/utils/sourceMap 的 stack，执行文件即可

### 列一下 webpack 技术点

1. 分成 webpack.analy.js、webpack.base.js、webpack.dev.js、webpack.prod.js，通过 NODE_ENV 区分环境
   1. webpack.analy.js 用于分析打包的时间和打包大小情况
   2. webpack.base.js 用于设置生产和开发环境的公共配置
   3. webpack.dev.js 开发环境特有配置
   4. webpack.prod.js 生产环境特有配置
2. 使用 css-loader、style-loader 处理 css 文件
3. 使用 less-loader 处理 less 文件
4. 使用 babel-loader 处理 ts|tsx 文件
5. 使用 copy-webpack-plugin 将 public 下的静态文件复制到导报文件夹下
6. 使用自带 asset-module 处理图片文件、字体、媒体文件
7. 使用@pmmmwh/react-refresh-webpack-plugin 以及 react-refresh 配置模块热更新
   1. devServer 中配置 hot 为 true，已经是热更新了，但是此时修改 app.tsx，界面会整个刷新，没法保存 react 组件的状态
8. 使用 speed-measure-webpack-plugin，进行构建构建耗时分析
9. 开启持久化存储缓存（cache: { type: "filesystem" }）
10. 开启多线程 thread-loader(注意，适合大项目，这里已经配置上)
11. 配置 alias 别名，使用@代替/src 文件路径
12. 使用 mini-css-extract-plugin，抽离 css 样式文件
13. 使用 css-minimizer-webpack-plugin 压缩 css 文件
14. 使用 terser-webpack-plugin 压缩 js 文件
15. 打包文件加上 hash
16. 使用 splitChunks 分割包
17. 使用 tree-shaking 清理未使用 js，生产模式自带
18. 使用 tree-shaking 清理未使用 css
19. 使用 compression-webpack-plugin 开启 gizp 压缩
20. 使用 dotenv-webpack 动态注入环境变量
