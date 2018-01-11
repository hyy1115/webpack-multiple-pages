//HTML无法支持热更新，会导致重新编译，但是可以通过下面这段hack来重新刷新
if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../login.html')
}

(() => console.log('welcome 登录页'))()