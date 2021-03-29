const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

const isDev = process.env.NODE_ENV === 'development'
const styleRules = [
  isDev ? 'style-loader' : MiniCSSExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [autoprefixer],
      },
    },
  },
  'sass-loader',
]

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: styleRules,
        // use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
        // use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CleanWebpackPlugin({}),
    new MiniCSSExtractPlugin({
      filename: 'style/[name].[hash:6].css',
    }),
  ],
  resolve: {
    alias: {
      src: path.join(__dirname, '../src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
}
