f = Function;
Function = function (a) {
    if (a !== 'debugger') {
        return f(a)
    }
};

Function.prototype.constructor_ = Function.prototype.constructor;
Function.prototype.constructor = function (x) {
    if (x !== 'debugger') {
        return Function.prototype.constructor_(x)
    }
};


eval_ = eval;
eval = function (a) {
    if (a == 'debugger') {
        return ''
    } else {
        return eval_(a)
    }
};

setInterval = function () {
};

console.log_ = console.log;
