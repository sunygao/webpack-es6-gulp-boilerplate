var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: [
      path.resolve('app/assets/scripts'),
      path.resolve('app/assets/scripts/vendor'),
    ],
    alias: {
      'jquery' : 'zepto',
      'TweenMax' : 'TweenMax',
      '_' : 'lodash-min'
    }
  },
  entry: [
    'babel-polyfill',
    './app/assets/scripts/main.js',
  ],
  output: {
  	path: path.resolve('app/assets/javascripts/'),
    publicPath: '/assets/javascripts/',
    filename: 'main.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'app/assets/scripts'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [require.resolve('babel-preset-es2015')],
          plugins: [
            ["transform-es2015-classes", {
              "loose": true
            }]
          ]
        }
      }
    ]
  },
  devServer: {
    hot: true,
    publicPath: '/assets/javascripts/'
  }
};
