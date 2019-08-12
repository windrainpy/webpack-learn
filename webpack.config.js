const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  // entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
  // watch: true,
  watch: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  mode: 'development'
}