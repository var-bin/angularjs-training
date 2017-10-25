const rules = require("./rules");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const path = require("path");

module.exports = {
  context: path.join(__dirname, ".."),
  entry: ["./src/test.ts"],
  output: {
    filename: "build.js",
    path: path.resolve("temp"),
    publicPath: "/"
  },
  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".json"
    ]
  },
  devtool: "inline-source-map",
  module: webpackMerge({
    rules: rules
  }, {
    // coverage
    rules: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /node_modules|\.spec\.js$/,
        loader: "istanbul-instrumenter-loader",
        enforce: "post",
        options: {
            esModules: true
        }
    }]
  })
};

