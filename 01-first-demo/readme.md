# vue学习之旅

最近在学习框架方面的内容，选择了目前很火的vue进行初步学习，官方推荐的是vue+webpack进行搭建环境。于是乎开始入坑webpack。

因为原来没有用过任何的构建工具与模块化工具，对这些理解不是很深刻。

## 什么是webpack

Webpack是一款用户打包前端模块的工具。主要是用来打包在浏览器端使用的javascript的。同时也能转换、捆绑、打包其他的静态资源，包括css、image、font file、template等。

## 安装

webpack是一个基于node的项目，所以必须事先安装 `node.js`

首先，进行全局安装，运行 `npm install webpack -g`

## 配置

`npm init` 进行初始化，一路回车

`npm install webpack --save-dev`安装 webpack 依赖

完成之后，`package.json`的内容应该如下

```json
 {
  "name": "first-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "webpack": "^1.13.2"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

至此，安装算是完成了。

## 第一个打包程序

首先，创建一个静态页面`index.html` 和一个js入口文件 `entry.js`

`index.html`的内容

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>first demo</title>
  </head>
  <body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

`entry.js`的内容

```javascript
document.write("This is my first webpack project");
```

接下来运行`webpack entry.js bundle.js`进行打包，运行成功后会生成bundle.js，然后打开index.js出现js文件中的文字。

## 第二个程序

新建一个 `first.js` 文件

```javascript
document.write("<br>This is my second project");
```

修改`entry.js`

```javascript
document.write("This is my first webpack project");
require("./first.js");
```

再次运行`webpack entry.js bundle.js`，index页面成功增加内容。




