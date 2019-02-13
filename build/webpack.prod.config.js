/**
 * Created by therfaint- on 22/12/2018.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// 清除目录等
const cleanWebpackPlugin = require('clean-webpack-plugin');
//4.x之后用以压缩
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer').BundleAnalyzerPlugin;
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfigBase = require('./webpack.base.conf');
const webpackConfigProd = {
  mode: 'production', // 通过 mode 声明生产环境
  output: {
    path: path.resolve(__dirname, '../dist'),
    /**
     * 打包多出口文件
     * https://segmentfault.com/a/1190000015592264
     */
    filename: 'js/[name]/[chunkhash:8].js',
    chunkFilename: 'js/[name]/[chunkhash:8].js',
    //publicPath: 'http://127.0.0.1:8888/'
    publicPath: '/',
  },
  //devtool: 'source-map',
  plugins: [
    //删除dist目录
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'), //根目录
      // verbose Write logs to console.
      verbose: true, //开启在控制台输出信息
      // dry Use boolean "true" to webapp/emulate delete. (will not remove files).
      // Default: false - remove files
      dry: false,
    }),
    // 分离css插件参数为提取出去的路径
    new extractTextPlugin({
      filename: 'css/[name]/[chunkhash:8].css',
      allChunks: true,
    }),
    //压缩css
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        // 禁用此插件的autoprefixer功能，因为要使通过postcss来使用
        autoprefixer: false,
        discardComments: {
          removeAll: true,
        },
        map: {
          inline: false,
          annotation: true,
        },
      },
    }),
    //上线压缩 去除console等信息webpack4.x之后去除了webpack.optimize.UglifyJsPlugin
    //https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
    new UglifyJSPlugin({
      parallel: true, // 使用多进程并行运行和文件缓存来提高构建速度
      uglifyOptions: {
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告
          warnings: false,
          // 删除所有的 `console` 语句
          // 还可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true,
          
        },
        output: {
          comments: false, // 删除所有的注释
          beautify: false // 最紧凑的输出
        },
        mangle: true,
      },
      sourceMap: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [],
  },
  
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
