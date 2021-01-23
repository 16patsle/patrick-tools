const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
          {
            loader: ExtractCssChunks.loader,
            options: {
              esModule: true,
              hmr: isDevelopment,
            },
          },
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
    new ExtractCssChunks({
      filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[contenthash].css',
    }),
    //isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})

module.exports = (env, argv) => createConfig(!env.production || argv.mode === 'development')
