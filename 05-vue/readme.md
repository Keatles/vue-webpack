# 加载vue单文件组件

解析`vue`文件时，需要进行的步骤

## 开始

### 第一步：初始化项目目录

目录结构

```
- dist //文件生成目录
	-- //自动生成
- node_module //自动安装
- src //文件入口
	-- components //组件存放
		-- app.vue
	-- main.js
- index.html
- package.json //npm配置
- webpack.config.js //webpack配置
```

### 第二步：安装项目依赖

首先，假如项目中不存在`package.json`文件的话，可以直接使用`npm init`来初始化`package.json`。

这是这次`package.json`配置文件

```
{
  "name": "vue",
  "version": "1.0.0",
  "description": "",
  "main": "bundle.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "babel": "^6.5.2",
    "babel-core": "^6.17.0",
    "babel-loader": "^6.2.5",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.16.0",
    "babel-runtime": "^6.11.6",
    "css-loader": "^0.23.1",
    "expose-loader": "^0.7.1",
    "file-loader": "^0.8.5",
    "html-loader": "^0.4.4",
    "node-sass": "^3.10.1",
    "sass-loader": "^4.0.2",
    "style-loader": "^0.13.0",
    "url-loader": "^0.5.7",
    "webpack": "^1.12.2",
    "webpack-dev-server": "^1.14.1"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "vue": "^1.0.18"
  }
}
```

### 第三步:配置webpack

`webpack.config.js`

```javascript
//nodejs中用于处理目录的对象
var path = require('path');

module.exports = {
    entry: './src/main',
    output: {
		// 文件地址，使用绝对路径形式
        path: path.join(__dirname, './dist'),
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        filename: '[name].js',
        // 公共文件生成的地址
        publicPath: '/dist/' 
    },
    // 服务器配置相关，自动刷新!
        devServer: {
        historyApiFallback: true,
        hot: false,
        inline: true,
        grogress: true,
    },
    module: {
        // 加载器
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
        // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
        // 编译css文件
        //install css-loader style-loader sass-loader node-sass --save-dev
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
        //html模板编译？
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
        ]
    },
    // .vue的配置。需要单独出来配置
        vue: {
        loaders: {
            css: 'style!css!autoprefixer!sass?sourceMap'
        }
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
};
```

第四步:主要代码

`html`:

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>webpack vue</title>
        <style>
            #app {
                margin: 20px auto;
                width: 800px;
                height: 600px;
            }
        </style>
    </head>

    <body>
        <div id="app"></div>
        <script src="dist/main.js"></script>
    </body>

    </html>
```

这里是`main.js`的内容：

```javascript
//es6语法：
//其实不用写完，会自动查找。
import Vue from "../node_modules/vue/dist/vue.min.js";
//引入我们编写的测试用vue文件。
import app from './components/app';

Vue.config.debug = true;//开启错误提示

new Vue(app);
```

这是`app.vue`的内容

```html
<script>
	//es6
	export default{
		el:"#app",
		//es6,等于data:function(){}
		data(){
			return{
				name:"mike",
				age:"25"
			}
		}
			
	}
</script>
<template>
	<div>
		<h1>姓名:{{name}}</h1>
		<h2>年龄:{{age}}</h1>
	</div>
</template>
<style lang="sass">
	/* 必须加lang, 否则无法编译*/
	$darkgreen:#098;
	body:{
		background-color:$darkgreen;
		 h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);/*测试自动添加前缀*/
        }
        h1:hover{
            height:100px;
        }

        h2{
            background-color: #999;
        }
	}
</style>
```

### 第五步：修改自动刷新设置

- `package.json`中`scripts`字段中的`"start"`
- `webpack.cofig.js`中对于`devServer`进行的配置

### 运行

使用`npm start`启动，之后若是更改内容便可在网页中实时刷新。

