// webpack.config.ts

import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as ManifestPlugin from "webpack-manifest-plugin";
import * as InlineChunkWebpackPlugin from "html-webpack-inline-chunk-plugin";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),

  entry: {
    vendors: [
      "angular"
    ],
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
      filename: "index.html",
      template: "./index.html"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors",
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),

    new UglifyJSPlugin(),

    new ManifestPlugin(),

    new InlineChunkWebpackPlugin({
      inlineChunks: [
        "runtime"
      ]
    })
  ]
};

export default config;

