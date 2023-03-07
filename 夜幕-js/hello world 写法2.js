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
    while (!![]) {
        switch (b[c++]) {
            case '0':
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
                continue;
            case '1':
                output_str = [];
                continue;
            case '2':
                d[0x0] = a['Qifez'](d[0x0], 0x1);
                continue;
            case '3':
                return output_str;
            case '4':
                for (var e = 0x0; a['ZjDEK'](e, d['length']); e++) {
                    output_str['push'](String['fromCharCode'](d[e]));
                }
                continue;
        }
        break;
    }
}
var s = test();
console['log'](s['join'](''));