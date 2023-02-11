# webpack-react-typescript

### 系统技术栈

1. 使用webpack5，由0开始集成项目
2. 使用react框架
3. 使用typescript
4. 使用cross-env注入环境变量
5. 使用prettierr自动格式化
6. 使用eslint规范代码格式
7. 使用lint-staged + husky + commitlint对commit注释和暂存区代码检验
8. 使用cz-customizable
9. 使用styled-component写样式
10. 使用andtd UI框架
11. 使用react-router-dom路由
12. 使用mobx管理数据

### 列一下webpack技术点

1. 分成webpack.analy.js、webpack.base.js、webpack.dev.js、webpack.prod.js，通过NODE_ENV区分环境
   1. webpack.analy.js用于分析打包的时间和打包大小情况
   2. webpack.base.js用于设置生产和开发环境的公共配置
   3. webpack.dev.js开发环境特有配置
   4. webpack.prod.js生产环境特有配置
2. 使用cssloader、style-loader处理css文件
3. 使用less-loader处理less文件
4. 使用babel-loader处理ts|tsx文件
5. 使用copy-webpack-plugin将public下的静态文件复制到导报文件夹下
6. 使用自带asset-module处理图片文件、字体、媒体文件
7. 使用[、@pmmmwh/react-refresh-webpack-plugin以及react-refresh配置模块热更新
   1. **devServer**中配置**hot**为true，已经是热更新了，但是此时修改app.tsx，界面会整个刷新，没法保存react组件的状态
8. 使用speed-measure-webpack-plugin，进行构建构建耗时分析
9. 开启持久化存储缓存（cache: { type: "filesystem" }）
10. 开启多线程thread-loader(注意，适合大项目，这里已经配置上)
11. 配置alias别名，使用@代替/src文件路径
12. 使用mini-css-extract-plugin，抽离css样式文件
13. 使用css-minimizer-webpack-plugin压缩css文件
14. 使用terser-webpack-plugin压缩js文件
15. 打包文件加上hash
16. 使用splitChunks分割包
17. 使用tree-shaking清理未使用js，生产模式自带
18. 使用tree-shaking清理未使用css
19. 使用compression-webpack-plugin开启gizp压缩