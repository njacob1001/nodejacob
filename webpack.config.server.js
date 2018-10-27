const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/server/server.js',
  output: {
    path: distPath,
    filename: 'server.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.jsx', '.webpack.js', '.web.js', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=./assets/img/'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
