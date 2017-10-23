const loaders = require("./loaders");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
    context: path.join(__dirname, ".."),
    entry: ['./src/index.ts'],
    output: {
        filename: 'build.js',
        path: path.resolve("./dist"),
        publicPath: "/"
    },
    resolve: {
        extensions: [
            '.ts',
            '.js',
            '.json'
        ]
    },
    resolveLoader: {
        modules: ["node_modules"]
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: "./dist",
        port: 8080,
        host: "localhost",
        hot: true,
        stats: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        loaders: loaders
    }
};
