const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

process.argv.length > 2 ? encodeFile = process.argv[2] : encodeFile = "./encode.js";
process.argv.length > 3 ? decodeFile = process.argv[3] : decodeFile = "./decodeResult.js";

let sourceCode = fs.readFileSync(encodeFile, {encoding: "utf-8"});
let ast = parser.parse(sourceCode);

_0x34e7 = ["AqLWq", "0zyxwvutsr", "TKgNw", "eMnqD", "thjIz", "btoa", "MNPQRSTWXY", "oPsqh", "niIlq",
    "evetF", "LVZVH", "fYWEX", "kmnprstwxy", "aYkvo", "tsrqpomnlk", "HfLqY", "aQCDK", "lGBLj", "test",
    "3210zyxwvu", "QWK2Fi", 'return /" ', "hsJtK", "jdwcO", "SlFsj", "OWUOc", "LCaAn", "[^ ]+)+)+[",
    "FAVYf", "2Fi+987654", "floor", "join", "EuwBW", "OXYrZ", "charCodeAt", "SkkHG", "iYuJr", "GwoYF",
    "kPdGe", "cVCcp", "INQRH", "INVALID_CH", "charAt", "push", "apply", "lalCJ", "kTcRS", '+ this + "',
    "ykpOn", "gLnjm", "gmBaq", "kukBH", "dvEWE", "SFKLi", "^([^ ]+( +", "qpomnlkjih", "^ ]}", "pHtmC",
    "length", "split", "ABHICESQWK", "FKByN", "U987654321", "lmHcG", "dICfr", "Szksx", "Bgrij", "iwnNJ",
    "jihgfdecba", "GfTek", "gfdecbaZXY", "constructo", "QIoXW", "jLRMs"
];
l = function (e, t) {
    return _0x34e7[e -= 188]
};

const callToLiteral =
    {
        CallExpression(path) {
            let {callee, arguments} = path.node;
            if (!types.isIdentifier(callee) || arguments.length != 1) {
                return;
            }

            let name = callee.name;

            if (!['e', 't', 'o', 'u'].includes(name) || !types.isNumericLiteral(arguments[0])) {
                return 0;
            }

            let value = l(arguments[0].value);
            path.replaceWith(types.valueToNode(value));
        }
    };

traverse(ast, callToLiteral);


let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});

fs.writeFile(decodeFile, code, (err) => {
});