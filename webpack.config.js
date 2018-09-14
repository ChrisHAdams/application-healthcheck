
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/client/index.html',
  filename: 'index.html',
});

const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: ['babel-polyfill', './src/client/index.js'],
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
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin,

    new CopyWebPackPlugin([
      { from: 'src/client/css/coreStyles.css', to: 'css/coreStyles.css' }])],
};

