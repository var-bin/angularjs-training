// webpack.config.ts

import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
//import * as ManifestPlugin from "webpack-manifest-plugin";
import * as InlineChunkWebpackPlugin from "html-webpack-inline-chunk-plugin";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import * as ChunkManifestPlugin from "@codemotion/chunk-manifest-webpack-plugin";
import * as CleanWebpackPlugin from "clean-webpack-plugin";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),

  entry: {
    app: "./src/app.ts",
    repositories: "./src/repositories/app.repositories.module.ts"
  },

  output: {
    path: path.resolve(__dirname, "module5/angularjs-controllers", "build"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  },

  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js"
    ],

    symlinks: false
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },

      // CSS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            options: {
              minimize: true
            }
          }]
        })
      },

      // HTML
      {
        test: /\.html$/,
        loader: "ng-cache-loader",
        options: {
          prefix: "[dir]/[dir]",
          minimizeOptions: {
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            preserveLineBreaks: true,
            removeEmptyAttributes: true,
            keepClosingSlash: true
          }
        },
        include: path.resolve("module5/angularjs-controllers/src")
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, "module5/angularjs-controllers", "build")], {
      root: path.resolve(__dirname, "module5")
    }),

    new HtmlWebpackPlugin({
      title: "Webpack title",
      filename: "index.html",
      template: "./index.html"
    }),

    new webpack.HashedModuleIdsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "[name].[chunkhash].js",
      minChunks: (module) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "uiRouter",
      filename: "[name].[chunkhash].js",
      minChunks: (module, count) => {
        return module.resource && (/uirouter/).test(module.resource) && count >= 1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime",
      filename: "[name].[chunkhash].js"
    }),

    new InlineChunkWebpackPlugin({
      inlineChunks: [
        "runtime"
      ]
    }),

    new UglifyJSPlugin(),

    new ChunkManifestPlugin({
      filename: "manifest.json",
      manifestVariable: "webpackManifest",
      inlineManifest: false
    }),

    new ExtractTextPlugin("[chunkhash].css")
  ]
};

export default config;
