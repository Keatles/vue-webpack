# 其他loader

## 加载图片

现在我们试试加载图片，首先要进行安装对应的`loader`。它会将引用图片转化为模块进行处理，使用该加载器需要先安装

```sh
npm install url-loader --save-dev
```

在目录下新建文件夹`image`，放入一张`jpg`的图片和`png`的图片。

然后修改`webpack.config.js`,在`loaders`增加以下内容:

```javascript
{
	test:/\.(png|jpg)$/,
	loader:"url-loader?limit=8192"// 添加到这！并且会按照文件大小, 或者转化为 base64
}

```

修改`index.html`

```html
<img src="image/logo.png" alt="">
<div id="logo"></div>
<div id="pic"></div>
```

`style.css`

```css
#logo{
    background-image: url(./image/logo.png);
    height: 200px;
    width: 200px;
}
#pic{
    background-image: url(./image/5.jpg);
    height: 200px;
    width: 300px;
}
```

继续运行`webpack`


### 热加载

使用`webpack-dev-server`可以实时自动刷新页面，默认监听`8080`端口。

```sh
# 安装
npm install webpack-dev-server -g

# 运行
webpack-dev-server
```

### 初试vue

首先安装vue到项目依赖中

```js
// import Vue form ("vue") //如果你安装了babel-loader的话，可以直接使用ES6的语法
var Vue =require("vue");
    new Vue({
        el: "body",
        data: {
            message: "hello vue.js"
        }
    });

```

在`index.html`中添加`{{ meassge }}`来响应vue的数据绑定，即可实现。




