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

// const data = {"uuid": "caa26ad8d4e011edb2255254006d01b8", "c": "c05d8d4bdd", "r": "zvBrJDiBzH", "t": "eSaajsdg8G6TkkFa9VeiaKWIRR/Gh5RGCd+YjPXtJg4="}
//
// a = hex_1_str(data);
// console.log(a);
//

module.exports =
    {
        hex_1_str
    };