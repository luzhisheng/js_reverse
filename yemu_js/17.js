function test() {
    var a = {
        'YOryo': '0|2|1|4|3',
        'Qifez': function (f, g) {
            return f + g;
        },
        'ZjDEK': function (f, g) {
            return f < g;
        }
    };
    var b = a['YOryo']['split']('|');
    var c = 0x0;
    var d = [
        0x67,
        0x65,
        0x6c,
        0x6c,
        0x6f,
        0x20,
        0x77,
        0x6f,
        0x72,
        0x6c,
        0x64
    ];

    d[0x0] = a['Qifez'](d[0x0], 0x1);

    output_str = [];

    for (var e = 0x0; a['ZjDEK'](e, d['length']); e++) {
        output_str['push'](String['fromCharCode'](d[e]));
    }

    return output_str;
}
var s = test();
console['log'](s['join'](''));
