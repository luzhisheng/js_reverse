console.log(111);
var worker = new Worker('work.js');
worker.postMessage('ayf');

worker.onmessage = function (event) {
    window.ayf = event.data
};