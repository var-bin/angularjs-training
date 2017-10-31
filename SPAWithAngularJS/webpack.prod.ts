// webpack.config.ts

import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as UglifyJSPlugin from "uglifyjs-webpack-plugin";
import * as ManifestPlugin from "webpack-manifest-plugin";
import * as InlineChunkWebpackPlugin from "html-webpack-inline-chunk-plugin";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),

  entry: {
    vendors: [
      "angular"
    ],
    bundle: "./src/app.ts"
  },

  output: {
    path: path.resolve(__dirname, "module5/angularjs-controllers", "build"),
    filename: "[name].[chunkhash].js"
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
            loader: "css-loader"
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
    new HtmlWebpackPlugin({
      title: "Webpack title",
      filename: "index.html",
      template: "./index.html"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendors"
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
    }),

    new ExtractTextPlugin("[contenthash].[id].css"),

    new webpack.HashedModuleIdsPlugin()
  ]
};

export default config;
