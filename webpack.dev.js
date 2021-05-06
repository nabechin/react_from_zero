const path = require('path');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const dist = path.join(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'index.bundle.js',
    path: dist,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
    ],
  },
  devServer: {
    contentBase: dist,
    hot: true,
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
