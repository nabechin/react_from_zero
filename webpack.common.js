const path = require('path');

const src = path.join(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(src, 'js/index.jsx'),
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]--[hash:base64:5]' },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'html/index.html'),
      minify: false,
    }),
    new MiniCssExtractPlugin({
      filename: prodMode ? 'app.min.css' : 'app.css',
    }),
  ],
};
