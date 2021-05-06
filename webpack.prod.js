const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const docs = path.join(__dirname, 'docs');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'app.min.js',
    path: docs,
  },
});
