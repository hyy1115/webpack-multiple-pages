const entry = require('./config/entry')
const proType = require('./config/devtool').proType
const proOutput = require('./config/output').proOutput
const loader = require('./config/loader')
const plugins = require('./config/plugins')

module.exports = {
  devtool: proType, //sourcemap类型
  entry, //入口
  output: proOutput, //输出
  module: loader, //加载资源转换
  plugins //插件
}
