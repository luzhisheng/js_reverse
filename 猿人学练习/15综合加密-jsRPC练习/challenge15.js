function SekiroClient(e) {
    if (this.wsURL = e, this.handlers = {}, this.socket = {}, !e) throw new Error("wsURL can not be empty!!");
    this.webSocketFactory = this.resolveWebSocketFactory(), this.connect()
}

SekiroClient.prototype.resolveWebSocketFactory = function () {
    if ("object" == typeof window) {
        var e = window.WebSocket ? window.WebSocket : window.MozWebSocket;
        return function (o) {
            function t(o) {
                this.mSocket = new e(o)
            }

            return t.prototype.close = function () {
                this.mSocket.close()
            }, t.prototype.onmessage = function (e) {
                this.mSocket.onmessage = e
            }, t.prototype.onopen = function (e) {
                this.mSocket.onopen = e
            }, t.prototype.onclose = function (e) {
                this.mSocket.onclose = e
            }, t.prototype.send = function (e) {
                this.mSocket.send(e)
            }, new t(o)
        }
    }
    if ("object" == typeof weex) try {
        console.log("test webSocket for weex");
        var o = weex.requireModule("webSocket");
        return console.log("find webSocket for weex:" + o), function (e) {
            try {
                o.close()
            } catch (e) {
            }
            return o.WebSocket(e, ""), o
        }
    } catch (e) {
        console.log(e)
    }
    if ("object" == typeof WebSocket) return function (o) {
        return new e(o)
    };
    throw new Error("the js environment do not support websocket")
}, SekiroClient.prototype.connect = function () {
    console.log("sekiro: begin of connect to wsURL: " + this.wsURL);
    var e = this;
    try {
        this.socket = this.webSocketFactory(this.wsURL)
    } catch (o) {
        return console.log("sekiro: create connection failed,reconnect after 2s:" + o), void setTimeout(function () {
            e.connect()
        }, 2e3)
    }
    this.socket.onmessage(function (o) {
        e.handleSekiroRequest(o.data)
    }), this.socket.onopen(function (e) {
        console.log("sekiro: open a sekiro client connection")
    }), this.socket.onclose(function (o) {
        console.log("sekiro: disconnected ,reconnection after 2s"), setTimeout(function () {
            e.connect()
        }, 2e3)
    })
}, SekiroClient.prototype.handleSekiroRequest = function (e) {
    console.log("receive sekiro request: " + e);
    var o = JSON.parse(e), t = o.__sekiro_seq__;
    if (o.action) {
        var n = o.action;
        if (this.handlers[n]) {
            var s = this.handlers[n], i = this;
            try {
                s(o, function (e) {
                    try {
                        i.sendSuccess(t, e)
                    } catch (e) {
                        i.sendFailed(t, "e:" + e)
                    }
                }, function (e) {
                    i.sendFailed(t, e)
                })
            } catch (e) {
                console.log("error: " + e), i.sendFailed(t, ":" + e)
            }
        } else this.sendFailed(t, "no action handler: " + n + " defined")
    } else this.sendFailed(t, "need request param {action}")
}, SekiroClient.prototype.sendSuccess = function (e, o) {
    var t;
    if ("string" == typeof o) try {
        t = JSON.parse(o)
    } catch (e) {
        (t = {}).data = o
    } else "object" == typeof o ? t = o : (t = {}).data = o;
    (Array.isArray(t) || "string" == typeof t) && (t = {
        data: t,
        code: 0
    }), t.code ? t.code = 0 : (t.status, t.status = 0), t.__sekiro_seq__ = e;
    var n = JSON.stringify(t);
    console.log("response :" + n), this.socket.send(n)
}, SekiroClient.prototype.sendFailed = function (e, o) {
    "string" != typeof o && (o = JSON.stringify(o));
    var t = {};
    t.message = o, t.status = -1, t.__sekiro_seq__ = e;
    var n = JSON.stringify(t);
    console.log("sekiro: response :" + n), this.socket.send(n)
}, SekiroClient.prototype.registerAction = function (e, o) {
    if ("string" != typeof e) throw new Error("an action must be string");
    if ("function" != typeof o) throw new Error("a handler must be function");
    return console.log("sekiro: register action: " + e), this.handlers[e] = o, this
};


var client = new SekiroClient("ws://127.0.0.1:5612/business/register?group=ayf-ws&clientId=" + Math.random());
client.registerAction("getData", function (request, resolve, reject) {
    numi = request.page;
    var url = "/api/challenge15";
    call = function(num) {
        window.sign = '';
        $("#loadingDiv").show();
        $('.sign').remove();
        $('.now').remove();
        $('body').append($("<script>").attr({
            class: "now",
            type: "text/javascript",
            src: "/cityjson"
        }));
        $('.page-box').hide();
        $.getScript("/api/challenge15/js?_t=" + returnCitySN["timestamp"], function() {
            if (window.sign) {
                var sign = window.sign
            } else {
                var sign = $.cookie('sign');

            }
            var list = {
                "page": String(num),
                "sign": sign
            };
            $.ajax({
                url: url,
                dataType: "json",
                async: true,
                data: list,
                type: "POST",
                beforeSend: function(request) {},
                success: function(data) {

                    var s = '<tr class="odd">';
                    datas = data.data;
                    resolve(datas);
                    $.each(datas, function(index, val) {
                        var html = '<td class="info fonteditor">' + val.value + '</td>';
                        s += html
                    });
                    $('.data').text('').append(s + '</tr>');

                    $("#loadingDiv").hide();
                    $('.page-box').show();
                },

                complete: function() {
                    $.removeCookie('sign', {
                        path: '/'
                    });
                    $("#page").paging({
                        nowPage: num,
                        pageNum: 100,
                        buttonNum: 7,
                        canJump: 1,
                        showOne: 1,
                        callback: function(num) {
                            call(num)
                        },
                    })
                },
                error: function() {
                    location.reload()
                }
            })

        });

    }
    ;
    call(numi)
});