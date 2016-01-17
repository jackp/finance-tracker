/* eslint no-var: 0, func-names: 0 , no-console: 0 */

/**
 * Development Server
 * - See https://github.com/gaearon/react-transform-boilerplate
 */

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var PORT = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + PORT);
});
