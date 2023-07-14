# AST基础知识

## nodejs

安装

https://nodejs.org/zh-cn/download/

## babel库

**安装**
```angular2html
npm install @babel/core --save-dev
```
--save：安装的包是项目发布之后还需要依赖的包，等项目上线以后还需使用，安装的会将信息写入 dependencies 中。

--save-dev： 安装的包则是开发时依赖的包，等项目上线则不会使，安装的会将信息写入 devDependencies 中。

npm install 在安装依赖包的时候，使用 --save-dev 和 --save都会将信息写入package.json 中。

**运行测试**
```javascript
const parsen = require('@babel/parser')
console.log(parsen)
```

**babel库**
1. JavaScript源代码转AST结构，@babel/parser，代码路径:
```javascript
node_modules\@babel\parser\lib
```
在 node_modules\@babel\parser\bin\babel-parser.js 该文件中有一段打印AST的代码，如下:
```javascript
#!/usr/bin/env node
/* eslint no-var: 0 */

var parser = require("..");
var fs = require("fs");

var filename = process.argv[2];
if (!filename) {
    console.error("no filename specified");
} else {
    var file = fs.readFileSync(filename, "utf8");
    var ast = parser.parse(file);

    console.log(JSON.stringify(ast, null, "  "));
}
```
2. AST结构转JavaScript源代码，@babel/generator，代码路径:
```javascript
node_modules\@babel\generator\lib\generators
```
![debugger](./img/1.png)

3. 遍历 AST结构 的相关api，@babel/traverse，代码路径:
```javascript
node_modules\@babel\traverse\lib
```
![debugger](./img/2.png)

该路径下的 path 和scope 子文件夹是学习的重点。

4. 构建新的节点，@babel/types，代码路径:
```javascript
node_modules\@babel\types\lib
```

![debugger](./img/3.png)

解混淆能用到的api，基本就在这四个目录里面了。
