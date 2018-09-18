require('dotenv').config({ silent: true });

const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const CSS_LOADER_OPTIONS = 'camelCase&modules&sourceMap&localIdentName=[name]--[hash:base64:5]';

const PATHS = {
  index: path.resolve('src/index.html'),
  src: path.resolve('src/index.jsx'),
  dist: path.resolve('build'),
};


module.exports = {
  entry: {
    app: [PATHS.src],
  },

  output: {
    path: PATHS.dist,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HTMLWebpackPlugin({
      template: PATHS.index,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { cacheDirectory: process.env.NODE_ENV === 'development' },
      },
      {
        test: /\.css$/,
        loader: ['style-loader', `css-loader?${CSS_LOADER_OPTIONS}`],
      },
    ],
  },
};
