
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
});

module.exports = {

  entry: './src/client/index.js',
  output: {
    path: path.resolve('dist/public'),
    filename: 'bundled.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin],
};

