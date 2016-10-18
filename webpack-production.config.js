const WebpackStripLoader = require('strip-loader');
const devConfig = require('./webpack.config.js');
const webpack = require('webpack');

var stripLoader = {
  test: [/\.js$/, /\.es6$/],
  exclude: /node_modules/,
  loader: WebpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;

// test uses regex to filter the kinds of files that enter the loader.
// strip-loader removes arbitrary functions out of the production code.
  // it will remove console.log statements in our build.
// build the production bundle with this command: webpack --config webpack-production.config.js -p
  // -p minifies the code.
