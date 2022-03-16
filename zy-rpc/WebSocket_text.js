!function () {
    window.ayf = e;
    var ws = new WebSocket("ws://127.0.0.1:9999");

    ws.onopen = function (evt) {
    };

    ws.onmessage = function (evt) {
        console.log(window.ayf.RSA.evcrypt(evt.data));
    };

    ws.onclose = function (evt) {
    };

}();
