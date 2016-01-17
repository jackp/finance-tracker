/* eslint no-var: 0 */
/**
 * Webpack Configuration - Development (webpack-dev-server)
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Ports
var WEBPACK_PORT = process.env.WEBPACK_PORT || 3000;

// Globals to import
var GLOBALS = {
  __DEV__: true,
  __PROD__: false,
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:' + WEBPACK_PORT,
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: '[name].[hash].js',
    publicPath: 'http://localhost:' + WEBPACK_PORT + '/',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel'],
      },
      {
        test: /\.(css|scss)$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
      {
        test: /\.(gif|png|jpg|svg|eot|otf|woff2|ttf|woff)(\?\S*)?$/,
        loaders: ['url?limit=8192'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    port: WEBPACK_PORT,
    contentBase: path.join(__dirname, 'src', 'public'),
    historyApiFallback: true,
    stats: {
      colors: true,
      timings: true,
      reasons: true,
      hash: false,
      version: false,
      chunks: false,
      chunkModules: false,
      cached: false,
      cachedAssets: false,
    },
  },
};
