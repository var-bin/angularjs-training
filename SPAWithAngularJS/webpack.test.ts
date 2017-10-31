// webpack.test.ts

"use strict";

import * as path from "path";
import * as webpack from "webpack";
import * as commonConfig from "./webpack.config";
import * as webpackMerge from "webpack-merge";

const rules: webpack.Rule[] = [
  // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
  {
    test: /\.tsx?$/,
    loader: "ts-loader"
  },

  // CSS
  {
    test: /\.css$/,
    use: [{
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }]
  },

  // HTML
  {
    test: /\.html$/,
    loader: "ng-cache-loader",
    options: {
      prefix: "[dir]/[dir]"
    },
    include: path.resolve("module5/angularjs-controllers/src")
  }
];

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),
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
  module: {
    rules
  }
};

export default config;
