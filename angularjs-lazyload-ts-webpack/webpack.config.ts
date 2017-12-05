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
    ],

    alias: {
      moment: path.join(__dirname, "node_modules/moment")
    }
  }
};

export default config;
