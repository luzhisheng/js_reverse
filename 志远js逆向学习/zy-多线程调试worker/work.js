console.log(self);
self.addEventListener('message', function (e) {
    console.log('You said: ' + e.data);
}, false);
