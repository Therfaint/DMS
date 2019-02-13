/**
 * Created by therfaint- on 22/12/2018.
 */
const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');

const rules = [
  {
    test: /\.(js|jsx)$/,
    // 不检查node_modules下的js文件
    exclude: '/node_modules/',
    use: ['babel-loader?cacheDirectory'],
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [
      {
        // 需要下载file-loader和url-loader
        loader: 'url-loader',
        options: {
          limit: 5 * 1024, //小于这个时将会已base64位图片打包处理
          // 图片文件输出的文件夹
          outputPath: 'images',
        },
      }],
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
    },
  },
  {
    test: /\.(css|less)/,
    exclude: '/node_modules/',
    // 区别开发环境和生成环境
    use: process.env.NODE_ENV === 'development' ? [
      'style-loader',
      'css-loader',
      'less-loader',
    ] : extractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'less-loader'],
      publicPath: './',
    }),
  },
];

module.exports = rules;
