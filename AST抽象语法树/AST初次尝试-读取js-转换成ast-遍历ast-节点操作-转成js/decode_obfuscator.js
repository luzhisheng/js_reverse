// 从文件获取js的源代码 fs 库
const fs = require('fs');

// 花括号 {} 表示解构赋值（Destructuring Assignment）语法，它用于从导入的模块中选择性地提取需要的属性或方法。
const {parse} = require("@babel/parser");

// 源文件名默认为 encode.js,生成处理后的目标文件名默认为 decode_result.js
let encode_file = "./encode.js", decode_file = "./decode_result.js";

// node decode_obfuscator.js encode.js decode_result.js
// encode.js 混淆前js源代码的路径
// decode_result.js 生成新js代码的路径
if (process.argv.length > 2) {
    encode_file = process.argv[2];
}
if (process.argv.length > 3) {
    decode_file = process.argv[3];
}

// 再保存到一个变量中，对这个变量进行处理即可:
let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});

let ast = parse(js_code);

// 打印ast树
console.log(ast)
// 打印整个ast树
console.log(JSON.stringify(ast, null, '\t'))


// const traverse = require("@babel/traverse").default;
// const visitor =
//     {
//         // 在 Babel 的 AST 遍历过程中，enter 是一个回调函数，用于在进入每个节点时执行特定的操作
//         enter(path) {
//             // 输出该节点的信息
//             console.log(path);
//         },
//     }
//
//
// //调用插件，处理源代码
// traverse(ast, visitor);


const types = require("@babel/types");
const traverse = require("@babel/traverse").default;
const visitor =
    {
        // 在 Babel 的 AST 遍历过程中，enter 是一个回调函数，用于在进入每个节点时执行特定的操作
        enter(path) {
            if (types.isStringLiteral(path)) {
                console.log("node是StringLiteral");
            } else {
                console.log("node不是StringLiteral");
            }
        },
    }
traverse(ast, visitor);


const generator = require("@babel/generator").default;
const generatedCode = generator(ast, {});
console.log(generatedCode);

// 写入文件
let {code} = generator(ast);
fs.writeFile('decode.js', code, (err) => {});
