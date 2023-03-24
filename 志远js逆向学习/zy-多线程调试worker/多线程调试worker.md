## 多线程

如何开启线程

    console.log(111);
    var worker = new Worker('work.js');

线程与线程传值问题

    worker.postMessage('ayf');
    
    接收
    
    console.log(self);
    self.addEventListener('message', function (e) {
        console.log('You said: ' + e.data);
    }, false);

拿到返回的子线程返回数据

    self.onmessage = function (e) {
      var uInt8Array = e.data;
      postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
      postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
    };
    
得到几个关键词

    主线程 Worker onmessage postMessage 
    子线程 self   onmessage postMessage 
    
经过案例，我发现能通过搜索的上面的关键词快速的定位

主线程不能直接调用子线程的方法

