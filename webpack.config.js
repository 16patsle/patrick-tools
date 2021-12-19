const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

/**
 * Creates a webpack config.
 * @param {boolean} isDevelopment
 * @returns {import('webpack').Configuration}
 */
const createConfig = (/** @type {boolean} */ isDevelopment) => ({
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            extends: './.babelrc',
            plugins: [
              isDevelopment && 'react-refresh/babel',
            ].filter(Boolean),
          },
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
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Very hacky, but it works. I see no other solution right now.
    alias: {
      './convertBinaryToDecimal.js$': path.resolve(__dirname, 'src/utils/convertBinaryToDecimal.ts'),
      './binary/getDecimalFromNegativeBinary.js$': path.resolve(__dirname, 'src/utils/binary/getDecimalFromNegativeBinary.ts'),
      './binary/getDecimal.js$': path.resolve(__dirname, 'src/utils/binary/getDecimal.ts'),
      './convertDecimalToBinary.js$': path.resolve(__dirname, 'src/utils/convertDecimalToBinary.ts'),
      './getDecimal.js$': path.resolve(__dirname, 'src/utils/binary/getDecimal.ts'),
    }
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
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})

module.exports = (env, argv) =>
  createConfig(!env.production || argv.mode === 'development')
