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
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "ng-annotate-loader"
      }, {
        loader: "babel-loader"
      }]
    }, {
      test: /\.html$/,
      loader: "raw-loader",
      exclude: path.resolve("./src/index.html")
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
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve("build"),
    hot: true,
    host: "localhost",
    port: 8080
  }
};

module.exports = config;
