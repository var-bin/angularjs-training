const rules = require("./rules");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
    context: path.join(__dirname, ".."),
    entry: ["./src/index.ts"],
    output: {
        filename: "build.js",
        path: path.resolve("./dist"),
        publicPath: "/"
    },
    devtool: "",
    resolve: {
        extensions: [
            ".ts",
            ".js",
            ".json"
        ]
    },
    resolveLoader: {
        modules: ["node_modules"]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"], {
            root: path.join(__dirname, "..")
        }),

        new UglifyJSPlugin({
            uglifyOptions: {
                ecma: 5,
                compress: {
                    dead_code: true,
                    drop_console: true,
                    toplevel: true,
                    unsafe_proto: true,
                    warnings: true
                },
                output: {
                    indent_level: 2,
                    beautify: false
                }
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            filename: "manifest.js",
            minChunks: Infinity
        }),

        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            hash: true
        })
    ],
    module: {
        rules: rules
    }
};
