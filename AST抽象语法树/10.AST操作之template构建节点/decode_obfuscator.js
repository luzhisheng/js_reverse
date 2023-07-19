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
