module.exports = [
    {
        test: /\.ts(x?)$/,
        loader: "ts-loader"
    }, {
        test: /\.ts$/,
        loader: "tslint-loader"
    }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    }, {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: "file-loader"
    }, {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "url-loader"
    }
];
