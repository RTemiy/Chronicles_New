// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    { test: /\.tsx?$/, loader: 'ts-loader' },

    {
      test: /\.(png|svg|jpg|gif)$/,
      type: 'asset/resource',
      generator: {
        filename: 'images/[hash][ext]'
      }
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[hash][ext]'
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
      'postcss-loader',
      'sass-loader'
      ]
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/Images/UI/icon.png'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
