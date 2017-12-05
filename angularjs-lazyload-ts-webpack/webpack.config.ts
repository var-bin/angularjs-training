import webpack from "webpack";
import path from "path";

// plugins
import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
  entry: {
    app: "./src/core/bootstrap.ts"
  },

  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname + "dist")
  },

  resolve: {
    extensions: [
      ".ts",
      ".js"
    ]
  },

  module: {
    rules: [
      /*** transpile (typescript) ***/
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          happyPackMode: true,
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      },

      /*** TSLint check ***/
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          // tslint errors are displayed by default as warnings
          // set emitErrors to true to display them as errors
          emitErrors: false,

          // tslint does not interrupt the compilation by default
          // if you want any file with tslint errors to fail
          // set failOnHint to true
          failOnHint: false
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname + "dist")], {
      root: __dirname
    }),

    new ForkTsCheckerWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      hash: true
    })
  ],

  devtool: "#@cheap-eval-source-map",

  devServer: {
    contentBase: path.resolve("dist"),
    hot: true,
    host: "localhost",
    port: 8080
  }
};

export default config;
