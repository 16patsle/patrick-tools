const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const createConfig = isDevelopment => ({
  entry: path.resolve(__dirname, 'src/index.js'),
  //target: isDevelopment ? 'web' : 'browserslist',
  output: {
    path: path.resolve(__dirname, "dist"),
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    //isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})

module.exports = (env, argv) => createConfig(argv.mode === 'development')
