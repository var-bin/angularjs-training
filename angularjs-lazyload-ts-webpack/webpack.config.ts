import * as webpack from "webpack";
import * as path from "path";

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
      },

      /*** css ***/
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },

      /*** html ***/
      {
        test: /\.html$/,
        loader: "ng-cache-loader?prefix=[dir]/[dir]",
        exclude: path.join(__dirname, "src", "index.html")
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

  devtool: "#@cheap-eval-source-map",

  devServer: {
    contentBase: path.resolve("dist"),
    hot: true,
    host: "localhost",
    port: 8080
  }
};

export default config;
