## 主线程发送内容，子线程加密

主线程发送内容

    console.log(111);
    var worker = new Worker('work.js');
    worker.postMessage('ayf');
    
    # 接收内容赋值给 window.ayf
    worker.onmessage = function (event) {
        window.ayf = event.data
    };
    
子线程加密

    console.log(self);
    self.addEventListener('message', function (e) {
        console.log('You said: ' + e.data);
        self.postMessage(e.data + "1")
    }, false);

子线程里面是没有 window对象的

## 伪造 worker

[伪造worker](./伪造worker.js)