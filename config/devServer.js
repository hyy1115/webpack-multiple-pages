const devServer = {
  contentBase: './',
  historyApiFallback: {
    rewrites: [
      { from: /^(\/|index.html)$/, to: '/index.html' },
      { from: /^login.html/, to: '/login.html' },
    ]
  },
  host: 'localhost',
  port: 9090,
  inline:true,
  hot: true,
  //hotOnly: true,
  open: true
}
module.exports = devServer