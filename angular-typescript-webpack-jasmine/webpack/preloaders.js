module.exports = [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          failOnHint: true
        }
      }
];
