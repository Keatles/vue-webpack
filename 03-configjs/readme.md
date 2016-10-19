# config文件

在上面我们已经尝试过了两种对于loader的使用方式，无论是在`require`的时候编写我们`loader`的前缀，还是在我们的命令行中进根据扩展名来自动绑定我们的`loader`模块，显然都不够自动化。要是需要多个`loader`时，问题将会变得十分复杂。

## webpack的运行


Webpack在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的`webpack.config.js`文件，这个文件是一个 `node.js` 模块，返回一个 `json` 格式的配置信息对象，或者通过 `--config` 选项来指定配置文件。因此可以通过配置`webpack.config.js`来解决问题。

## 配置webpack

```javascript
module.exports = {
	entry:["./entry.js"],
	output:{
		path:__dirname,
		filename:"bundle.js"
	},
	module:{
		loaders:[{
			test:/\.css$/,
			loader:"style!css"
		}]
	}
}
```

仅仅需要运行`webpack`，这个命令会自动查找`config.js`里的配置文件，并且按照里面的规则执行。

## 了解webpack插件

下面就来看看`webpack`中的插件：

插件可以完成更多loader不能完成的功能。插件的使用一般是在`webpack.config.js`中的`plugins` 选项中指定。

`Webpack`本身内置了一些常用的插件，还可以通过npm安装第三方插件。

接下来，我们从一个最简单的，用来给输出的文件头部添加注释信息`BannerPlugin`的内置插件来实践插件的配置和运行。

修改` webpack.config.js，`添加 plugins配置项：

```js
var Webpack = require("webpack");//必须引入
module:{
},
plugins: [
    new webpack.BannerPlugin("这里是打包文件头部注释！")//注意这是一个数组..
]
```

运行正确的话应该是这样的，打开`bundle.js`，会发现在文件头部已经有了我们添加的注释：

```js
/*! 这里是打包文件头部注释 */
/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};
        /***  省略 ***/
        })
```
最简单的插件使用方式就是这样的了。