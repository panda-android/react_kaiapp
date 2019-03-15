const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-function-bind',
              '@babel/plugin-proposal-class-properties'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: 'file-loader',
              name: '[sha512:hash:base64:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:6].[ext]'
          }
        }]
      },
      {
        test: /\.properties$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  ],
};


// var path = require('path');
// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = {
//   resolve: {
//     root: [__dirname + '/src'],
//     // alias: {
//     //   'soft-key-store': path.resolve('./node_modules/soft-key-store'),
//     //   'base-component': path.resolve('./node_modules/base-component')
//     // }
//   },
//   entry: {
//     app: './src/index.js',
//     vendors: ['react']
//   },
//   output: {
//     path: __dirname + '/dist',
//     filename: 'bundle.js',
//     publicPath: 'dist/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0']
//         }
//       },
//       // {
//       //   test: /\.(scss|css)$/,
//       //   loader: ExtractTextPlugin.extract('style', 'css!sass', { publicPath: './'})
//       // },
//       {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
//       {
//           test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9]+)?$/,
//           loader: 'file-loader'
//       }
//     ]
//   },
// //   plugins: [
// //     new webpack.optimize.DedupePlugin(),
// //     new webpack.optimize.OccurenceOrderPlugin(),
// // //    new ExtractTextPlugin("style.css"),
// // //    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
// //   ]
//   plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: 'style.css',
//       chunkFilename: '[id].css'
//     })
//   ],
// };
