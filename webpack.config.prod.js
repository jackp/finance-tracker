/* eslint no-var: 0 */
/**
 * Webpack Configuration - Production
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Project root
var SRC_DIR = path.resolve(__dirname, './src');
var DIST_DIR = path.resolve(__dirname, './dist');

// Globals to import
var GLOBALS = {
  __DEV__: false,
  __PROD__: true,
};

module.exports = {
  context: SRC_DIR,
  devtool: false,
  entry: [
    './index.js',
  ],
  output: {
    path: DIST_DIR + '/public',
    filename: '[name].[hash].js',
    publicPath: 'public',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loaders: ['babel'],
      },
      {
        test: /\.(css|scss)$/,
        include: SRC_DIR,
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      filename: '../index.html',
      inject: 'body',
    }),
  ],
};
