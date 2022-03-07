console.log(self);
self.addEventListener('message', function (e) {
    console.log('You said: ' + e.data);
    self.postMessage(e.data + "1")
}, false);
