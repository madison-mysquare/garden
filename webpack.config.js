module.exports = {
  context: __dirname + "/app",
  entry: ["./global.js", "./app.js"],

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  watch: true
};
