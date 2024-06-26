const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './dev/store/index.jsx',
  output: {
    path: path.resolve(__dirname, './dev/store/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/store/public/index.html'
    })
  ],
  devServer: {
    compress: path.join(__dirname, './dev/store/dist'),
    historyApiFallback: true,
    compress: true,
    port: 3030
  }
};
