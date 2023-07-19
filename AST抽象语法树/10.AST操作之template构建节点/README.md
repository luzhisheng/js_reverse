# AST操作之template构建节点

它允许你使用自定义的代码模板来构建 AST 节点，而不需要手动创建和操作 AST 节点对象。

需求：构建节点`var global_0 = 1,global_1 = 2,global_2 = 3;`

```javascript
const {parse} = require("@babel/parser");
const types = require("@babel/types");
const template = require("@babel/template").default;
const generator = require("@babel/generator").default;

let ast = parse("", {
    sourceType: 'module',
});

// 定义源代码模板
VAR_NODE = template(`var A = 1,B = 2, C = 3`);

// 构建 AST 节点的数据
let firstVar = types.identifier('global_0');
let secondVar = types.identifier('global_1');
let thirdVar = types.identifier('global_2');
let newNode = VAR_NODE({A: firstVar, B: secondVar, C: thirdVar});
ast.program.body.push(newNode);

// 将 AST 节点转换为代码
let {code} = generator(ast);
console.log(code);
```

需求：构建节点_0x6f2ba4 = 666;

```javascript
const {parse} = require("@babel/parser");
const types = require("@babel/types");
const template = require("@babel/template").default;
const generator = require("@babel/generator").default;

let ast = parse("", {
    sourceType: 'module',
});

// 定义源代码模板
VAR_NODE = template('A = B');

// 构建 AST 节点的数据
let firstVar = types.identifier('_0x6f2ba4');
let secondVar = types.valueToNode(666);
let newNode = VAR_NODE({A: firstVar, B: secondVar});
ast.program.body.push(newNode);

// 将 AST 节点转换为代码
let {code} = generator(ast);
console.log(code);
```

需求：构建节点方法二_0x6f2ba4 = 666;

 @babel/parser 中的 parseExpression 函数来解析值并将其转换为一个有效的表达式节点。请确保在 buildAST 函数中使用 parseExpression 来正确解析 "VALUE" 占位符：

```javascript
const template = require("@babel/template").default;
const { parseExpression } = require("@babel/parser");
const generate = require("@babel/generator").default;

// 定义源代码模板
const sourceCodeTemplate = `VARIABLE_NAME = VALUE;`;

// 使用 @babel/template 构建 AST 节点
function buildAST(variableName, value) {
    // 将值解析为表达式节点，以创建一个有效的 AST 节点
    const parsedValue = parseExpression(value.toString());

    // 使用 @babel/template 创建带有正确替换的 AST 节点
    const astTemplate = template(sourceCodeTemplate);
    const astNode = astTemplate({
        VARIABLE_NAME: variableName,
        VALUE: parsedValue, // 使用有效的表达式节点替换 VALUE
    });

    return astNode;
}

// 将 AST 节点转换为代码
function generateCodeFromAST(astNode) {
    const { code } = generate(astNode);
    return code;
}

// 测试代码
const variableName = "_0x6f2ba4";
const value = 666;
const astNode = buildAST(variableName, value);
const generatedCode = generateCodeFromAST(astNode);

console.log(generatedCode);
```