const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy assets to /dist

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.jsx',
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })),
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'images/[hash]-[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality: 60,
                lossless: true,
              },
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/assets/images'),
      styles: path.resolve(__dirname, 'src/assets/styles'),
    },
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{ from: './src/assets/images', to: 'assets/images' }]),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      inject: false,
      chunks: ['app'],
      template: HtmlWebpackTemplate,
      appMountId: 'content',
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Dotenv({
      path: './.env',
    }),
  ],
};
