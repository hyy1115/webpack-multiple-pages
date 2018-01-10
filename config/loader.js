const ExtractTextPlugin = require('extract-text-webpack-plugin')
const isPro = process.env.NODE_ENV === 'production'
const loader = {
  rules: [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(less|css)$/,
      use: isPro ? ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "less-loader"]
      }) : ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.html$/,
      use: 'html-loader?attrs=img:src img:data-src'
    }, {
      test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: 'file-loader?name=./fonts/[name].[ext]'
    }, {
      test: /\.(png|jpe?g|gif)$/,
      use: 'url-loader?limit=2048&name=./img/[name]/[hash].[ext]'
    }
  ]
}
module.exports = loader