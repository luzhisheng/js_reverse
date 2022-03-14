
self.addEventListener('message', function (e) {
    self.postMessage(e.data + "1")
}, false);
