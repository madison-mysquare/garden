module.exports = {
  context: __dirname + "/app",
  entry: ["./global.js", "./app.js"],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  watch: true,
  module: {
    preloaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
};
// allows use of require('./logger') instead of require('./logger.js');
