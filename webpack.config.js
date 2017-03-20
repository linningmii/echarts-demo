const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js?[hash]',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.pug$/,
      use: 'pug-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.pug'),
      favicon: path.resolve(__dirname, './public/favicon.png')
    }),
    new ExtractTextPlugin('style.css?[hash]')
  ]
};