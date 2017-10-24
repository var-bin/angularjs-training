const rules = require("./rules");
const webpack = require("webpack");
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
  resolveLoader: {
    modules: ["node_modules"]
  },
  devtool: "source-map-inline",
  module: {
    rules: rules
  }
};

