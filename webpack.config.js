const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'App');
const BUILD_DIR = path.resolve(__dirname, 'API');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
      }
    ]
  },
  resolve: { // dont have to specify extensions
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
