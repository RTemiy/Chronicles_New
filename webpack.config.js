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
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackPwaManifest = require('webpack-pwa-manifest')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
  entry: {
    app: ['./src/index.ts']
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
    rules: [
      {
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
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[hash][ext]'
        }
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'sounds/[hash][ext]'
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
        use: [
          MiniCssExtractPlugin.loader,
          {
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
      filename: 'privacy_policy.html',
      template: './src/privacy_policy.html',
      chunks: ['policy']
    }),
    new HtmlWebpackPlugin({
      filename: 'terms_conditions.html',
      template: './src/terms_conditions.html',
      chunks: ['terms']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/Images/UI/icon.png',
      chunks: ['app']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new WebpackPwaManifest({
      name: 'Chronicles | Твой выбор',
      short_name: 'Chronicles',
      description: 'Много вариативная визуальная новелла',
      background_color: 'black',
      theme_color: '#007769',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/Images/UI/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ],
      'theme-color': 'black',
      lang: 'ru',
      display: 'standalone',
      related_applications: [
        {
          platform: 'play',
          url: 'https://play.google.com/store/apps/details?id=com.mva.chronicles'
        }
      ],
      orientation: 'portrait',
      id: '/Chronicles_New/',
      scope: '/'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 10000000000
    })
  ]
}
