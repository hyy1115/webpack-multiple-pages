# webpack-multiple-pages

基于webpack3的多页应用架构，采用babel编译，支持ES5-ES8的语法，支持tree-shaking。

### 用法

#### 下载源码

#### 安装插件

```npm
npm install
```

#### 开发环境运行

启动项目之后，会自动打开浏览器，你可以在首页和登录页面切换，你可以尽情使用es6+的语法进行开发。

实现了（css | less）热更新、js热更新，但是html热更新暂未实现，如果你有好的方案，可以分享出来。

```npm
npm run dev
```

#### 打包发布

项目会打包到dist文件夹，js经过babel编译成可在浏览器执行的代码，图片也打包到单独的文件夹，css也分类管理，html会
自动打包并且写入script和link标签，你不需要在html手动添加，而是在plugins做配置即可。

```npm
npm run build
```

### 疑问

如果你对项目的代码或者运行有疑问，请提issue。

如果你想要新功能的支持，请提issue。