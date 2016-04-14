const webpack = require('webpack');

module.exports = {
  entry: [
    './client/index',
  ],
  output: {
    path: `./dist`,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(), // Can crash so it may not be needed
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss?$/,
      loader: 'style!css!sass',
      include: `${__dirname}css`
    }]
  }
}
