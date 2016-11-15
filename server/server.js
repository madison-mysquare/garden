var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.js');
var compiler = webpack(config);
var app = module.exports = express();

app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  hot: true,
  // stats: {colors: true},
  // where to get bundle.js -- defined in webpack.config.js
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, '../client/'), {'index': ['index.html']} ));
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(express.static(path.join(__dirname, '../client/components')));
app.use(express.static(path.join(__dirname, '../static/dist')));

require('./apiRoutes.js')(app);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function(error) {
  if (error) throw error;
  console.log("Server is listening on port: ", PORT);
});

// if(module.hot) {
//   module.hot.accept('./apiRoutes', function() {
//     require('./apiRoutes')(app);
//   });
// }
