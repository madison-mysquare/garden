var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.js');
// sets up middware use in express app.
var webpackDevMiddleware = require('webpack-dev-middleware');
// sets up hot module replacement for express app.
var webpackHotMiddleware = require('webpack-hot-middleware');
// to be inserted into webpackDevMiddleware.
var compiler = webpack(config);
var app = express();

app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  // where to get bundle.js -- defined in webpack.config.js
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../app/components')));
app.use(express.static(path.join(__dirname, '../dist')));

require('./apiRoutes.js')(app);

var port = 8000;
app.listen(port, function(error) {
  if (error) throw error;
  console.log("Server is listening on port: ", port);
});
