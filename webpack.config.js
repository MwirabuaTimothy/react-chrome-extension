const path = require('path')

module.exports = {
  entry: {
    background: './src/entry.background.js',
    content: './src/entry.content.js',
    vendor: [
      'react',
      'redux',
      'react-dom',
      'react-redux',
      'webext-redux',
      'styled-components'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: './js/[name].js',
    publicPath: './output'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'output'),
    port: 8080,
    writeToDisk: true
  }
}
