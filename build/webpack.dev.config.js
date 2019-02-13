/**
 * Created by therfaint- on 22/12/2018.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigDev = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
    port: '8088',
    stats: 'errors-only',//仅打印错误日志
    overlay: true, // 浏览器页面上显示错误
    open: true, // 开启浏览器
    hot: true, // 开启热更新
    historyApiFallback: true,
    disableHostCheck: true,
    proxy: {
      '*': {
        target: 'http://localhost:8080',
      },
    },
  },
  plugins: [
    // webpack-hot-middleware + webpack-dev-middleware = HMR
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};

module.exports = merge(webpackConfigBase, webpackConfigDev);
