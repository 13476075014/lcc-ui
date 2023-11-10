// 这个文件是自定义webpack的打包，不用vue的脚手架的配置
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(process.cwd(), './dist'),
    clean: true
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    // https://webpack.docschina.org/configuration/module/#ruleuse
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false// 页面img引入的话需要设置
          }
        //   options: {
        //     limit: 10000,
        //     name: path.posix.join('static', '[name].[hash:7].[ext]')
        //   }
        }]
      }
    ]
  },
  devServer: {
    hot: true,
    compress: true,
    port: 8081,
    open: true,
    proxy: {},
    https: false
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../../public/index.html'),
      inject: true,
      favicon: path.resolve(__dirname, '../../public/favicon.ico')
    })
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, '../../public'),
    //       to: 'dist'
    //     }
    //   ]
    // })
  ]
}
