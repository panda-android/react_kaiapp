// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'app.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: '[name]_[local]_[hash:base64]',
//               sourceMap: true,
//               minimize: true
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|jpg)$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 4096,
//               fallback: 'file-loader',
//               name: '[sha512:hash:base64:7].[ext]'
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9]+)?$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name]-[hash:6].[ext]'
//           }
//         }]
//       },
//       {
//         test: /\.properties$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]'
//           }
//         }]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html'
//     })
//   ]
// };



const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
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
  // 4.0+ do not support extract
  // plugins: [
  //   new ExtractTextPlugin('[name].style.css')
  // ],
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
      chunkFilename: '[id].css'
    })
  ]
};
