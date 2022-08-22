fb测试地址

    https://www.facebook.com/profile.php?id=100055837744229

![debugger](../img/107.png)

打开f12，刷新页面，发现fb存在 `pending` 连接。

以下是 WebSocket 对象的相关事件。

    open	Socket.onopen	连接建立时触发
    message	Socket.onmessage	客户端接收服务端数据时触发
    error	Socket.onerror	通信发生错误时触发
    close	Socket.onclose	连接关闭时触发
    Socket.send()	使用连接发送数据
    Socket.close()	关闭连接
    
先对 `Socket.send()` 打断点，但是发现存在很多位置，那如果快速找到 `Socket.send()` 发送的位置，`hook` `send()` 方法，直接快速

