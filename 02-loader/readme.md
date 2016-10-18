# loader入门

上一个demo中，成功将`entry.js`和`first.js`两个文件合并打包在一起生成`bundle.js`。

另外webpack可以也可以通过安装不同类型的`loader`，来处理不同类型的文件，例如`css`,`scss`,`json`等。

## loader介绍

`Loader`可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过require来加载任何类型的模块或文件。

loader的一些特性:

- `Loader`可以通过管道方式链式调用，每个`loader`可以把资源转换成任意格式并传递给下一个`loader`，但是最后一个`loader`必须返回JavaScript。
- `Loader`可以同步或异步执行。
- `Loader`运行在node.js环境中，所以可以做任何可能的事情。
- `Loader`可以接受参数，以此来传递配置项给`loader`。
- `Loader`可以通过文件扩展名（或正则表达式）绑定给不同类型的文件。
- `Loader`可以通过npm发布和安装。
- 除了通过`package.json`的`main`指定，通常的模块也可以导出一个`loader`来使用。
- `Loader`可以访问配置。
- 插件可以让`loader`拥有更多特性。
- `Loader`可以分发出附加的任意文件。

## loader的安装和使用

### 安装

安装读取css的文件 `css-loader`,再用`style-loader`插入页面中。

在命令行中输入

```sh
npm install css-loader style-loader --save-dev
```

成功之后，在`package.json`里多出了这几行

```json
"devDependencies": {
    "css-loader": "^0.25.0",
    "style-loader": "^0.13.1"
  }
```

当然也可以先在`json`文件中修改然后再使用`npm install`进行安装。

### 加载css文件

给上一篇的文件添加一个简单的`css`样式

`style.css`

```css
body{
	background-color:yellow;
}
```

在`entry.js`添加

```javascript
require("!style!css!./style.css");
```

然后执行`webpack entry.js bundle.js`，刷新就可以发现页面发生了变化。

这样会导致每次写require都显得十分复杂，另一种方法是在`entry.js`
不添加前缀直接写`require("./style.css");`

在用webpack生成打包文件时加上loader


`webpack entry.js bundle.js --module-bind "css=style\!css`
`//因为在命令行里!有特殊意义所以需要对其进行转义`