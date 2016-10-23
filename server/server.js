var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.js');
// sets up middleware use in express app.
var webpackDevMiddleware = require('webpack-dev-middleware');
// sets up hot module replacement for express app.
var webpackHotMiddleware = require('webpack-hot-middleware');
// to be inserted into webpackDevMiddleware.
var compiler = webpack(config);
var app = module.exports = express();

app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  // where to get bundle.js -- defined in webpack.config.js
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../client/components')));
app.use(express.static(path.join(__dirname, '../dist')));

require('./apiRoutes.js')(app);

var PORT = process.env.PORT || 8000;
app.listen(PORT, function(error) {
  if (error) throw error;
  console.log("Server is listening on port: ", PORT);
});

// if(module.hot) {
//   module.hot.accept('./apiRoutes', function() {
//     require('./apiRoutes')(app);
//   });
// }
