"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./src/core/bootstrap.js"
  },
  output: {
    path: path.resolve(__dirname + "/build/"),
    filename: "bundle.js"
  },
  resolve: {
    root: path.resolve(__dirname + "/src/")
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "ng-annotate!babel"
    }, {
      test: /\.html$/,
      loader: "raw",
      exclude: "index.html"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js",
      minChunks: (module) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
  ]
};

module.exports = config;
