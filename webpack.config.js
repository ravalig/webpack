var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    "axios", "lodash",  "react", "react-bootstrap", "react-dom", "react-redux", "react-router",
     "redux", "redux-form", "redux-promise", "redux-thunk"
];

module.exports = {
  entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        use: 'html-loader',
        test: /\.html$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
        "React": "react",
    })
  ]
};
