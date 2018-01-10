const path = require('path')
console.log(path.resolve(__dirname))
const output = {
  devOutput: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[id].[hash].js'
  },
  proOutput: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '//localhost:6888/webpack-multiple-pages/dist/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[hash].js'
  }
}
module.exports = output