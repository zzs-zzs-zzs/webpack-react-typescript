const prodConfig = require("./webpack.prod")
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin")
const smp = new SpeedMeasureWebpackPlugin()
const { merge } = require("webpack-merge")

// 使用smp.wrap将生产配置传出去
module.exports = smp.wrap(
  merge(prodConfig, {

  })
)