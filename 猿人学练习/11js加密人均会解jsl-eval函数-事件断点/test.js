function createElement(){
    return {
        'innerHTML':'',
        'firstChild':{
            'href':'http://www.python-spider.com/challenge/11'
        }
    }
}
function  setTimeout (){ }
document = {
    'attachEvent' : function(){},
    'addEventListener':function(){},
    'createElement':createElement,
};


var _N = function () {
    setTimeout('location.href=location.pathname+location.search.replace(/[\?|&]captcha-challenge/,\'\')', 1500);
    document.cookie = '__jsl_clearance=1677949245.576|0|' + (function () {
        var _t = [function (_N) {
                return _N
            }, function (_t) {
                return _t
            }, (function () {
                var _N = document.createElement('div');
                _N.innerHTML = '<a href=\'/\'>_1H</a>';
                _N = _N.firstChild.href;
                var _t = _N.match(/https?:\/\//)[0];
                _N = _N.substr(_t.length).toLowerCase();
                return function (_t) {
                    for (var _1H = 0; _1H < _t.length; _1H++) {
                        _t[_1H] = _N.charAt(_t[_1H])
                    }
                    ;
                    return _t.join('')
                }
            })(), function (_N) {
                for (var _t = 0; _t < _N.length; _t++) {
                    _N[_t] = parseInt(_N[_t]).toString(36)
                }
                ;
                return _N.join('')
            }],
            _N = ['clD', [(-~~~{} << -~~~{}) + (-~~~{} << -~~~{})], 'V', [(-~[] + [] + [[]][0]) + [-~-~{}]], 'fq', [(-~[] + [] + [[]][0]) + [-~[] - ~[] - ~!/!/ + (-~[] - ~[]) * [-~[] - ~[]]], (-~[] + [] + [[]][0]) + (-~[-~-~{}] + [[]][0]), (-~[] + [] + [[]][0]) + [(+!![[][[]]][1])]], 'LBWywKW', [(2 - ~[-~-~{}] + [] + [[]][0])], '%2FZyf', [(-~[] + [] + [[]][0]) + (-~[-~-~{}] + [[]][0])], '6', [(-~[] + [] + [[]][0]) + (-~[-~-~{}] + [[]][0])], '_5f9f264ddd0bc5c81baf5167fb285724', (-~[-~-~{}] + [[]][0]), 'D'];
        for (var _1H = 0; _1H < _N.length; _1H++) {
            _N[_1H] = _t[[1, 0, 1, 2, 1, 3, 1, 2, 1, 2, 1, 3, 1, 0, 1][_1H]](_N[_1H])
        }
        ;
        return _N.join('')
    })() + ';Expires=Tue, 12-Dec-30 09:50:26 GMT;Path=/;'
};
if ((function () {
    try {
        return !!window.addEventListener;
    } catch (e) {
        return false;
    }
})()) {
    document.addEventListener('DOMContentLoaded', _N, false)
} else {
    document.attachEvent('onreadystatechange', _N)
}

_N();
console.log(document);