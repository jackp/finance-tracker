/* eslint no-var: 0 */

/**
 * Webpack Configuration - Production
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Globals to import
var GLOBALS = {
  __DEV__: false,
  __PROD__: true,
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
};

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/client.js',
  ],
  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: '[name].[hash].js',
    publicPath: 'public/',
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
        loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
    }),
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: './src/index.prod.html',
      filename: '../index.html',
      inject: 'body',
    }),
  ],
};
