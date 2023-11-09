/**
 * 这个文件打包输出umd的index.js文件，是全局引入该组件库的入口文件
 * 主要逻辑：
 * output：
 *  libraryTarget 需要赋值为umd
 * 需要处理js文件css文件vue文件
 */
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  // webpack5如何配置一个库的输出：
  // https://webpack.docschina.org/guides/author-libraries/#root
  // https://webpack.docschina.org/configuration/output/#outputlibraryexport
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'lccx-ui.common.js',
    chunkFilename: '[name].js',
    library: {
      name: 'LCCXUI',
      type: 'umd', // commonjs2/amd/umd
      export: 'default' // 指定哪一个导出应该被暴露为一个库
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {},
    modules: ['node_modules']
  },
  externals: {},
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
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
            limit: 10000,
            name: path.posix.join('static', '[name].[hash:7].[ext]')
          }
        }]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
