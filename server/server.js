var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.js');
// sets up middware use in express app.
var webpackDevMiddleware = require('webpack-dev-middleware');
// sets up hot module replacement for express app.
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

// to be inserted into webpackDevMiddleware.
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  // where to get bundle.js -- defined in webpack.config.js
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('../dist'));

app.use('/', function (req, res) {
  res.sendFile(path.resolve('./index.html'));
  // res.send('index');
});

var port = 8000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Server is listening on port: ", port);
});
