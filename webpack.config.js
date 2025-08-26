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
      // theme_color: '#007769',
      theme_color: '#000000',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/Images/UI/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ],
      screenshots: [
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/eb4ebbc7-a389-46a3-aa7f-91860221889f.jpg',
          form_factor: 'wide',
          label: 'Скриншот на ПК'
        },
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/78677ca7-eca7-4a75-bfd2-59f0757534f1.jpg',
          form_factor: 'wide',
          label: 'Скриншот на ПК'
        },
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/4e6c83e9-5b53-44b3-acb9-e8e9073171c7.jpg',
          form_factor: 'wide',
          label: 'Скриншот на ПК'
        },
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/eb4ebbc7-a389-46a3-aa7f-91860221889f.jpg',
          form_factor: 'narrow',
          label: 'Скриншот на мобильном устройстве'
        },
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/78677ca7-eca7-4a75-bfd2-59f0757534f1.jpg',
          form_factor: 'narrow',
          label: 'Скриншот на мобильном устройстве'
        },
        {
          src: 'https://vkplay.ru/hotbox/showcase/gamehighlight/pic/4e6c83e9-5b53-44b3-acb9-e8e9073171c7.jpg',
          form_factor: 'narrow',
          label: 'Скриншот на мобильном устройстве'
        }
      ],
      'theme-color': 'black',
      lang: 'ru',
      display: 'standalone',
      related_applications: [
      ],
      orientation: 'portrait',
      id: '/',
      scope: '/'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 10000000000
    })
  ]
}
