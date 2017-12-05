import webpack from "webpack";
import path from "path";

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
  }
};

export default config;
