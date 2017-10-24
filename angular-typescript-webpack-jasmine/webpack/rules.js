const rules = [
    // TypeScript
    {
        test: /\.ts(x?)$/,
        loader: "ts-loader"
    },

    // TSLint
    {
        test: /\.ts$/,
        loader: "tslint-loader",
        options: {
            emitErrors: true,
            failOnHint: true
        }
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

    // SCSS
    {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
    },

    // HTML
    {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "raw-loader"
    },

    // Fonts (woff, woff2)
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
            loader: "url-loader",
            options: {
                limit: 10000,
                mimetype: "application/font-woff"
            }
        }]
    },

    // Fonts (ttf, eot, svg)
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
    },

    // jpg
    {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: "file-loader"
    },

    // png
    {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "url-loader"
    }
];

module.exports = rules;
