const preloaders = require("./preloaders");
const loaders = require("./loaders");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.ts"],
  output: {
    filename: "build.js",
    path: "tmp"
  },
  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".json"
    ]
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  module: {
    preLoaders: preloaders,
    loaders: loaders,
    postLoaders: [
      {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules)/,
        loader: "istanbul-instrumenter"
      }
    ]
  },
  tslint: {
      emitErrors: true,
      failOnHint: true
  }
};

