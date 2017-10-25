const rules = require("./rules");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
    context: path.join(__dirname, ".."),
    entry: ["./src/index.ts"],
    output: {
        filename: "build.js",
        path: path.resolve("./dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".json"
        ]
    },
    module: {
        rules: rules
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            hash: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: "dist",
        port: 8080,
        host: "localhost",
        hot: true,
        stats: {
            colors: true
        }
    }
};
