const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// less的配置有问题  稍后看一下
// Css module 和 ant的样式会产生冲突，打包自己写的css代码时用长沙市module  解析ant时不用
const cssLoader = function (modules = true, loader = '') {
  return ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: loader ? [{
      loader: 'css-loader',
      options: {
        modules, // 开启css module  生成css局部作用域
      },
    }, 'postcss-loader', loader]
    : [{
      loader: 'css-loader',
      options: {
        modules, // 开启css module  生成css局部作用域
      },
    },
      'postcss-loader',
    ],

  });
};
module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router-dom', 'antd', 'redux', 'mobx', 'react-redux', 'redux-thunk', 'mobx-react'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].js',
  },
  module: {
    rules: [{
      test: /.js$/,
      include: /src/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'], // 箭头函数解析报错 加上这个stage-0就好了
          plugins: [
            'transform-decorators-legacy',
            ['import', {
              libraryName: 'antd',
              style: 'css',
            }], // antd按需加载
          ],
        },
      },
    },
    {
      test: /\.css$/,
      use: cssLoader(),
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: cssLoader(false),
      include: /node_modules/,
    },
    {
      test: /\.less$/,
      use: cssLoader(true, 'less-loader'),
    },
    // {
    //   test: /\.sass$/,
    //   use: cssLoader(true, 'sass-loader'),
    // },
    {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192, // 大于8k 生成文件
          name: 'resource/[name].[ext]',
        },
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          limit: 8192, // 大于8k 生成文件
          name: 'resource/[name].[ext]',
        },
      },

    },
    ],
  },
  plugins: [
    // 处理html
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
    }),
    // 独立css文件
    new ExtractTextPlugin('css/[name].css'),
    // 提取公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      BizComponent: path.resolve(__dirname, 'src/component'),
      BizAction: path.resolve(__dirname, 'src/action'),
    },
  },
};
