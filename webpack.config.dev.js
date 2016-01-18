/* eslint no-var: 0 */

/**
 * Webpack Configuration - Development (webpack-dev-server)
 */
var path = require('path');
var webpack = require('webpack');

// Globals to import
var GLOBALS = {
  __DEV__: true,
  __PROD__: false,
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/public/',
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
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
      {
        test: /\.(gif|png|jpg|svg|eot|otf|woff2|ttf|woff)(\?\S*)?$/,
        loaders: ['url?limit=8192'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
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
};
