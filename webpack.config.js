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
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
};
// "resolve" allows use of require('./logger') instead of require('./logger.js');
// "test: [/\.js$/, /\.es6$/]"" allows for both .js and .es6 files to be passed to babel, allowing for the use of JSX in the code.
