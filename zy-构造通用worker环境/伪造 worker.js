var crypto = require('crypto');

var md5 = function (content) {
    var result = crypto.createHash('md5').update(content).digest("hex");
    return result
};

var window = this;

//所有线程缓存
var Workers = {};

//线程本身
var Worker_self = function () {

};

Worker_self.prototype.postMessage = function () {
};

Worker_self.prototype.onmessage = function () {
};


//开启线程（主线程）
var Worker = function (js_name, js_code) {
    if (typeof (Workers[js_name]) == "undefined") {
        js_name = md5(js_name);
        Workers[js_name] = new Worker_self();
        eval("self=window.Workers[\""+js_name+"\"];"+js_code)
    }
    return Workers[js_name]
};

Worker.prototype.postMessage = function () {

};

Worker.prototype.onmessage = undefined;


var worker = new Worker("worker.js", "");
worker.postMessage('ayf');
worker.onmessage = function (event) {
    window.ayf = event.data
};