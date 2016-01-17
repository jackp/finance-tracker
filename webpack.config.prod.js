/* eslint no-var: 0 */
/**
 * Webpack Configuration - Production
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Globals to import
var GLOBALS = {
  __DEV__: false,
  __PROD__: true,
};

module.exports = {
  devtool: false,
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: '[name].[hash].js',
    publicPath: 'public',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel'],
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
      template: './src/index.html',
      filename: '../index.html',
      inject: 'body',
    }),
  ],
};
