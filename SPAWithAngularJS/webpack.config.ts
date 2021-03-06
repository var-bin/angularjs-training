// webpack.config.ts

import * as webpack from "webpack";
import * as path from "path";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as ManifestPlugin from "webpack-manifest-plugin";
import * as InlineChunkWebpackPlugin from "html-webpack-inline-chunk-plugin";
import * as BrowserSyncPlugin from "browser-sync-webpack-plugin";

const config: webpack.Configuration = {
  context: path.resolve(__dirname, "module5/angularjs-controllers"),

  entry: {
    app: "./src/app.ts",
    repositories: "./src/repositories/app.repositories.module.ts"
  },

  output: {
    path: path.resolve(__dirname, "module5/angularjs-controllers", "build"),
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
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack title",
      filename: "index.html",
      template: "./index.html"
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      minChunks: (module) => {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "uiRouter",
      filename: "[name].[chunkhash].js",
      minChunks: (module, count) => {
        return module.resource && (/uirouter/).test(module.resource) && count === 1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "runtime"
    }),

    new ManifestPlugin(),

    new InlineChunkWebpackPlugin({
      inlineChunks: [
        "runtime"
      ]
    }),

    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      open: false,
      proxy: "http://localhost:3001/"
    }, {
      reload: false
    }),

    new webpack.NamedModulesPlugin(),

    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: [
      "build"
    ],
    host: "localhost",
    port: 3001,
    hot: true,
    stats: {
      colors: true
    }
  }
};

export default config;
