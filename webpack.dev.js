const entry = require('./config/entry')
const devType = require('./config/devtool').devType
const devOutput = require('./config/output').devOutput
const loader = require('./config/loader')
const plugins = require('./config/plugins')
const devServer = require('./config/devServer')

module.exports = {
  devtool: devType, //sourcemap类型
  entry, //入口
  output: devOutput, //输出
  module: loader, //加载资源转换
  plugins, //插件
  devServer //开发服务器
}
