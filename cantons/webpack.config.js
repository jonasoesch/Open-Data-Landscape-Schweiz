var path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devServer: {
        contentBase: "./dist"
      },
    module: {
        loaders: [
          {
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
          }
        ]
    },
    devtool: "source-map"
}