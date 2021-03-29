const path = require('path')
const { merge } = require('webpack-merge')
const CssMinimizerPlguin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./webpack.common.js')

module.exports = merge(commonConfig, {
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlguin(), new TerserPlugin()],
  },
})
