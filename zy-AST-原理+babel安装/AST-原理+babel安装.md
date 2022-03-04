## ast

ast抽象语法树，不是js独有的

## var a = 1 如果翻译成ast

    "root":{
        "赋值语句"：{
            "左边"：{
                "名称"："a",
                "其他的信息"：....
            },
            "右边"：1
        }
    }
 
发现json文件能很好的描述tree结构，可以对上面数据做增删改查

## ob混淆 sojson

你提交一断js代码 -》混淆器（ast）-》返回到网页

## 哪些地方用到ast

    ide 
    格式化
    js压缩
    v8 解释器

## ast 插件 babel

    https://www.babeljs.cn/
    
Babel 是一个 JavaScript 编译器。

编译器是将程序员写的代码变成计算机能看得懂的代码

Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

es6 -> es5

js只有语法没有实现，跨平台 -》 
    
    1.一次编译多个解释器运行 mono java js，都有不同平台的解释器
    2.多次编译，直接运行 c++（v8） gcc 指定运行平台
    
Babel 手册

    https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/README.md
    
树结构遍历模式

    深度优先，先子后兄
    广度优先，先兄后子

安装 babel-core 代码

    npm install babel-core
    
测试编译成ast代码

    var babel = require("@babel/core");
    
    var code = "var a = 1;";
    
    const result = babel.transform(code, {ast: true});
    console.log(result.code);
    console.log("分割----");
    console.log(result);
    console.log("分割----");
    console.log(result.ast.program.body);
    
输出效果 body 里面才有真正的内容

    var a = 1;
    分割----
    {
      metadata: {},
      options: {
        assumptions: {},
        ast: true,
        targets: {},
        cloneInputAst: true,
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false,
        passPerPreset: false,
        envName: 'development',
        cwd: '/home/aiyingfeng/spider/js_reverse/zy-AST-原理+babel安装',
        root: '/home/aiyingfeng/spider/js_reverse/zy-AST-原理+babel安装',
        rootMode: 'root',
        plugins: [],
        presets: [],
        parserOpts: { sourceType: 'module', sourceFileName: undefined, plugins: [] },
        generatorOpts: {
          filename: undefined,
          auxiliaryCommentBefore: undefined,
          auxiliaryCommentAfter: undefined,
          retainLines: undefined,
          comments: true,
          shouldPrintComment: undefined,
          compact: 'auto',
          minified: undefined,
          sourceMaps: false,
          sourceRoot: undefined,
          sourceFileName: 'unknown'
        }
      },
      ast: Node {
        type: 'File',
        start: 0,
        end: 10,
        loc: SourceLocation {
          start: [Position],
          end: [Position],
          filename: undefined,
          identifierName: undefined
        },
        errors: [],
        program: Node {
          type: 'Program',
          start: 0,
          end: 10,
          loc: [SourceLocation],
          sourceType: 'module',
          interpreter: null,
          body: [Array],
          directives: [],
          leadingComments: undefined,
          innerComments: undefined,
          trailingComments: undefined
        },
        comments: [],
        leadingComments: undefined,
        innerComments: undefined,
        trailingComments: undefined
      },
      code: 'var a = 1;',
      map: null,
      sourceType: 'module',
      externalDependencies: Set(0) {}
    }
    分割----
    [
      Node {
        type: 'VariableDeclaration',
        start: 0,
        end: 10,
        loc: SourceLocation {
          start: [Position],
          end: [Position],
          filename: undefined,
          identifierName: undefined
        },
        declarations: [ [Node] ],
        kind: 'var',
        leadingComments: undefined,
        innerComments: undefined,
        trailingComments: undefined
      }
    ]

遍历内容拿到变量名 name 和 value 值

    // 将JS源码转换成语法树
    var parser = require("@babel/parser");
    // 为parser提供模板引擎
    var template = require("@babel/template").default;
    // 遍历AST
    var traverse = require("@babel/traverse").default;
    // 操作节点，比如判断节点类型，生成新的节点等
    var t = require("@babel/types");
    // 可以直接用type声明一断新的代码
    // 将语法树转换为源代码
    var generator = require("@babel/generator").default;
    // 操作文件
    var fs = require("fs");
    
    var jscode = fs.readFileSync("read.js", {     //更改读取文件
        encoding: "utf-8"
    });
    
    let ast = parser.parse(jscode);
    
    var traverses =
        {
            // 遍历节点，当遇到下列类型的时候会调用函数
            VariableDeclarator(path) {
                console.log(path.node.id.name);
                console.log(path.node.init.value);
            }
        };
    
    traverse(ast, traverses);
    
输出

    a
    1
    
修改 value 值

    // 将JS源码转换成语法树
    var parser = require("@babel/parser");
    // 为parser提供模板引擎
    var template = require("@babel/template").default;
    // 遍历AST
    var traverse = require("@babel/traverse").default;
    // 操作节点，比如判断节点类型，生成新的节点等
    var t = require("@babel/types");
    // 可以直接用type声明一断新的代码
    // 将语法树转换为源代码
    var generator = require("@babel/generator").default;
    // 操作文件
    var fs = require("fs");
    
    var jscode = fs.readFileSync("read.js", {     //更改读取文件
        encoding: "utf-8"
    });
    
    let ast = parser.parse(jscode);
    
    var traverses =
        {
            // 遍历节点，当遇到下列类型的时候会调用函数
            VariableDeclarator(path) {
                console.log(path.node.id.name);
                path.node.init = t.stringLiteral("ayf");
                console.log(path.node.init.value);
            }
        };
    
    traverse(ast, traverses);
    
    let code = generator(ast);
    console.log(code);
    console.log(code.code);

输出

    a
    ayf
    { code: 'var a = "ayf";', map: null, rawMappings: undefined }
    var a = "ayf";
    
babel-types

    https://www.babeljs.cn/docs/babel-types