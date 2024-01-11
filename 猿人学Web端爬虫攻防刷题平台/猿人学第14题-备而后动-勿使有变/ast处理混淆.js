const fs = require('fs');
const {parse} = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generator = require("@babel/generator").default;
const t = require("@babel/types");

function get_sojson_enc(ast) {
    var first_idx = 0;
    for (var i = 0; i < ast.program.body.length; i++) {
        if (ast.program.body[i].type != 'EmptyStatement') {
            first_idx = i;
            break
        }
    }
    var decrypt_code = ast.program.body.slice(first_idx, first_idx + 3);
    var rest_code = ast.program.body.slice(first_idx + 3);
    ast.program.body = decrypt_code;
    var {code} = generator(ast, {
        compact: true
    });
    global_code = code;
    decryptStr = decrypt_code[2].declarations[0].id.name;
    ast.program.body = rest_code;
    return ast
}

function calcBinary(path) {
    var tps = ['StringLiteral', 'BooleanLiteral', 'NumericLiteral'];
    var nod = path.node;

    function judge(e) {
        return (tps.indexOf(e.type) != -1) || (e.type == 'UnaryExpression' && tps.indexOf(e.argument.type) != -1)
    }

    function make_rep(e) {
        if (typeof e == 'number') {
            return t.NumericLiteral(e)
        }
        if (typeof e == 'string') {
            return t.StringLiteral(e)
        }
        if (typeof e == 'boolean') {
            return t.BooleanLiteral(e)
        }
        throw Error('unknown type' + typeof e)
    }

    if (judge(nod.left) && judge(nod.right)) {
        path.replaceWith(make_rep(eval(path + '')))
    }
}

function pas_sojson_enc(ast) {
    eval(global_code);
    traverse(ast, {
        CallExpression: funToStr,
        StringLiteral: delExtra,
        NumericLiteral: delExtra,
    });
    return ast;

    function funToStr(path) {
        var node = path.node;
        if (!t.isIdentifier(node.callee, {name: decryptStr}))
            return;
        let value = eval(path.toString());
        // console.log("还原前：" + path.toString(), "还原后：" + value);
        path.replaceWith(t.valueToNode(value));
    }

    function delExtra(path) {
        delete path.node.extra;
    }
}

function muti_process_sojsondefusion(jscode, config) {
    var ast = parse(jscode);
    config = config || {};

    if (ast.program.body.length == 1) {
        ast.program.body = ast.program.body[0].expression.callee.body.bodygenerator
    }

    // ob 解混淆处理部分
    ast = get_sojson_enc(ast);
    ast = pas_sojson_enc(ast);
    traverse(ast, {BinaryExpression: {exit: calcBinary}});

    var {code} = generator(ast, {jsescOption: {minimal: true,}});
    return code;
}

// let encode_file = "./m.js";
// let js_code = fs.readFileSync(encode_file, {encoding: "utf-8"});
// console.log(muti_process_sojsondefusion(js_code));

function v14_v142(js_code) {
    return muti_process_sojsondefusion(js_code)
}

module.exports =
    {
        v14_v142
    };
