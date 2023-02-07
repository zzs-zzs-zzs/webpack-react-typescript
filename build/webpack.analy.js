const prodConfig = require("./webpack.prod")
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasureWebpackPlugin()
const { merge } = require("webpack-merge")
const { BundleAnalyzerPlugin  } = require("webpack-bundle-analyzer")

// 使用smp.wrap将生产配置传出去
module.exports = smp.wrap(
  merge(prodConfig, {
    plugins: [
      // 配置分析打包结果插件
      new BundleAnalyzerPlugin ()
    ]
  })
)