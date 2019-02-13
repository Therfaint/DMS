/**
 * Created by therfaint- on 22/12/2018.
 */
const webpack = require("webpack");
const path = require('path');
const rules = require('./webpack.rules.config.js');
const htmlWebpackPlugin = require('html-webpack-plugin');

var baseConfig = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/client/'
  },
  module: {
    rules: [...rules],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx', '.less'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: `src/client/index.html`,
      inject: true,
      chunks: ['app']
    })
  ],
};

module.exports = baseConfig;
