const fs = require('fs');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

// 元代码
process.argv.length > 2 ? encodeFile = process.argv[2] : encodeFile = "./encode.js";
// 被重新编译后的代码
process.argv.length > 3 ? decodeFile = process.argv[3] : decodeFile = "./decodeResult.js";

let sourceCode = fs.readFileSync(encodeFile, {encoding: "utf-8"});
let ast = parser.parse(sourceCode);

var e, t;
_0x4c28 = ["18|38|15|2", "ucisR", "wWwRM", "LzcOo", "yWGcu", "PlAEw", "ihcci", "hBKtU", "rvloG", "xcQTI",
    "uhJgH", "vRqUp", "EQEzR", "abc", "QgSUn", "0|45|44|19", "WMqBp", "koePJ", "jGSEC", "IKbhW", "wEOgn",
    "|49|71|11|", "xgzfr", "ABCDEF", "DdHPB", "aFxRD", "sFtiw", "concat", "YhaCC", "YVBwM", "abYok",
    "2|28|6|36|", "NLOsy", "bRLIN", "xGAWc", "length", "zYRlD", "14|67|61|3", "bolvy", "pagBT", "mdsJQ",
    "4|69|41|26", "kaXPV", "IWxBE", "pviAr", "5|0|2", "lvwPz", "YcDFe", "yGmJD", "FcYqi", "AAZoR",
    "|46|5|3|50", "PnITs", "ABCDEFGHIJ", "charCodeAt", "KLMNOPQRST", "prrXX", "FDiNG", "split", "oBesn",
    "9|24|10|56", "VaXsK", "fromCharCo", "FDfcp", "rrdPR", "HHkBN", "89+/", "mfuQZ", "PbrnX", "FcXlo",
    "rNapo", "fEXNi", "qtIDJ", "60|53|21|5", "Rtsed", "SUrST", "nsaps", "vyNVU", "2|29|23|64", "0|43|57|4|",
    "NNXUu", "nCrbn", "wQPIq", "XBcOb", "39|40|47|6", "ljkOt", "yMPhx", "TXzzv", "0123456789", "fmdcS",
    "iXQwu", "grCxb", "3|6|1|4|7|", "wKeAM", "Iekey", "opqrstuvwx", "|7|17", "BQgZQ", "BtzmV", "jZUAt",
    "HYhpy", "Yvoqt", "VyzBI", "NNVLf", "dbmfK", "0|58|16|32", "UAFHv", "WNIsZ", "2|1|4|3|5|", "JFqRJ",
    "zObVA", "d24fb0d696", "XfWkD", "MFmWH", "lZISZ", "WzbFA", "kaQlD", "3f7d28e17f", "eSwEi", "YpeFX",
    "kZhzK", "KxKIe", "LAIPf", "LjyKQ", "YLwOK", "iqfMz", "51|8|0|65|", "JRihE", "nqEyg", "|37|22|27|",
    "ZXsFi", "goEwl", "|31|63|48|", "wvVCN", "wnDlW", "Myvqp", "UlhBp", "fwCDC", "charAt", "Lmhlz",
    "WQCAS", "UXeVn", "KIXRL", "HiEZt", "WNzfT", "lNWda", "tsNzQ"],
    e = _0x4c28,
    t = 368,
    function(t) {
        for (; --t; )
            e.push(e.shift())
    }(++t);
l = function(e, t) {
    return _0x4c28[e -= 0]
};

const callToLiteral =
    {
        CallExpression(path) {
            // 拿到callee节点和arguments节点
            let {callee, arguments} = path.node;
            // 判断callee的节点类型 和 判断arguments是否只有一个参数
            if (!types.isIdentifier(callee) || arguments.length != 1) {
                return;
            }
            // 获得函数名
            let name = callee.name;
            // 检查数组 ['e', 't', 'o', 'u'] 是否包含变量 name 的值
            // 判断数组中第一个元素的类型是否是NumericLiteral
            if (!['c', 't', 'r', 'n', 'l'].includes(name) || !types.isNumericLiteral(arguments[0])) {
                return 0;
            }
            // 获取NumericLiteral的值
            let value = l(arguments[0].value);
            // 替换节点值
            path.replaceWith(types.valueToNode(value));
        }
    };

traverse(ast, callToLiteral);

let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});

fs.writeFile(decodeFile, code, (err) => {
});