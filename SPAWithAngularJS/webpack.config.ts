// webpack.config.ts

import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),

  entry: {
    vendors: "./src/vendors.ts",
    bundle: "./src/app.ts"
  },

  output: {
    path: path.resolve(__dirname, "module5/angularjs-controllers/build"),
    filename: "[name].bundle.js"
  },

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js"
    ]
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack title",
      filename: "./index.html"
    })
  ]
};

export default config;

