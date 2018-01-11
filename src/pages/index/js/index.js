//HTML无法支持热更新，会导致重新编译，但是可以通过下面这段hack来重新刷新
if (runtime_env !== 'production') {
    require('file-loader!../index.html')
}

//导入样式
import '../styles/index.less'

//执行js
const a = () => console.log('welcome 首页')
a()