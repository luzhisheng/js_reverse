const wp = require('whirlpool-js');

function hex_1_str(data){
    for (var s = 0; s <= 25000000; s++) {
        result = wp.encSync(data.r + s.toString(), "hex");

        if (result.slice(0, 10) === data.c) {
            break;
        }
    }
    return s;
}

// const data = {"uuid": "e4c958f2d45611eda02c52540078cc4c", "c": "787aaa89c8", "r": "UCHQwxAwjX", "t": "eCOZi8Zg31uZsXxm3WKyeKSNRhrHh5RGCd+XifzvIwM="}
//
// a = hex_1_str(data);
// console.log(a);


module.exports =
    {
        hex_1_str
    };