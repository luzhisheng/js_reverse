// 发出 xhr 和 ajxa 请求的两种的方式
// 逆向过程中通常需要找参数构造或者请求发送的地方
// 看懂语法有助于逆向


// ajax
$.ajax({
    // 构造请求头
    url: loginUrl + "?uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random()
    type: "POST",
    dataType: "text",
    contentType: "application/x-www-from-urlencoded; charset=urf-8",
    data: {
        //构造请求正文
        uuid:$('#uuid').val(),
        eid:$('#eid').val(),
    },
    error: function () {
        // 错误的触发
    },
    success: function (result) {
        // 成功返回响应正文时触发
    }
});


// XHR
function SendXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.sfhfpc.com/index.html?p=123');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4){
            console.log(xhr.responseText)
        }
    }
}

SendXHR();