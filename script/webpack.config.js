const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: 'js/[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "127.0.0.1",
    port: 3003,
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|s[ac]ss)$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
        // use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/template.html",
      filename: "index.html",
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: "style/[name].[hash:6].css",
    }),
  ],
  resolve: {
    alias: {
      src: path.join(__dirname, "../src"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
};
