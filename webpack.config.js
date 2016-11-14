const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname + "/client",
  entry: [
    "webpack-hot-middleware",
    "webpack/hot/dev-server",
    "./main.js",
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/static/"
    // publicPath: "http://localhost:8080/dist/"
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  watch: true,
  module: {
    preloaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react-hmre', 'react', 'es2015'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};
// "resolve" allows use of require('./logger') instead of require('./logger.js');
// "test: [/\.js$/, /\.es6$/]"" allows for both .js and .es6 files to be passed to babel, allowing for the use of JSX in the code.
// devtool makes it easier to debug - instead of giving us an error from bundle.js, we will see it in our source files.
