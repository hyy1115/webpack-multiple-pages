const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

//添加你的页面信息
const pages = [
  {
    favicon: 'src/img/favicon.jpg',
    filename: './index.html',
    template: 'src/pages/index/index.html',
    hash: true,
    chunks: ['index'],
    minify: {
      removeComments: true,
      collapseWhitespace: false
    }
  },
  {
    favicon: 'src/img/favicon.jpg',
    filename: './login.html',
    template: 'src/pages/login/login.html',
    hash: true,
    chunks: ['login'],
    minify: {
      removeComments: true,
      collapseWhitespace: false
    }
  }
]
let plugins = []
pages.forEach(function (v) {
  plugins.push(new HtmlWebpackPlugin(v))
})
if (process.env.NODE_ENV === 'production') {
  plugins.push(new UglifyJSPlugin(),
      new ExtractTextPlugin('css/[name].css'))
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = plugins