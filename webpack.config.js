const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const createConfig = isDevelopment => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  //target: isDevelopment ? 'web' : 'browserslist',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          /*
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
          */
        },
      },
      {
        test: /\.css$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    !isDevelopment &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
    }),
    //isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})

module.exports = (env, argv) => createConfig(!env.production || argv.mode === 'development')
