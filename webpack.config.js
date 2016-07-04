// Dependencies
var join = require('path').join;
var resolve = require('path').resolve;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// Paths
const root = resolve(__dirname);
const src = join(root, 'src');
const dest = join(root, 'dist');
const modules = join(root, 'node_modules');

// Main export
module.exports = {
  // Working dir
  context: src,
  // Main entry point
  entry: {
    javascript: './index.js',
    html: './index.html',
  },
  // Register custom loaders
  module: {
    loaders: [
      // Hot reloading
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      // Babel transpiling
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      // Css loaders
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
      // File loader
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ],
  // Output settings
  output: {
    filename: 'index.js',
    path: dest,
  },
  // Resolve loaders from node modules
  resolveLoader: {
    root: modules
  }
}
