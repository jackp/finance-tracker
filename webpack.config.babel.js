/**
 * Webpack Configuration - Development (webpack-dev-server)
 */
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Project root
const SRC_DIR = path.resolve(__dirname, './src');

// Ports
const WEBPACK_PORT = process.env.WEBPACK_PORT || 3000;

// Globals to import
const GLOBALS = {
  __DEV__: true,
  __PROD__: false,
};

export default {
  context: SRC_DIR,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`,
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: '[name].[hash].js',
    publicPath: `http://localhost:${WEBPACK_PORT}/`,
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        loaders: ['react-hot', 'babel'],
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html',
      inject: 'body',
    }),
  ],
  devServer: {
    port: WEBPACK_PORT,
    contentBase: SRC_DIR + '/public/',
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
