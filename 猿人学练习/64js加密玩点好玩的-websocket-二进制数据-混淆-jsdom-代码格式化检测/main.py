import websocket
try:
    import thread
except ImportError:
    import _thread as thread
from websocket import _handshake
import requests
import json


def get_handshake_headers(resource, url, host, port, options):
    headers = ['GET /api/challenge64 HTTP/1.1', 'Host: www.python-spider.com', 'Connection: Upgrade',
               'Pragma: no-cache', 'Cache-Control: no-cache',
               'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
               ' Chrome/113.0.0.0 Safari/537.36',
               'Upgrade: websocket', 'Origin: https://www.python-spider.com', 'Sec-WebSocket-Version: 13',
               'Accept-Encoding: gzip, deflate, br', 'Accept-Language: zh-CN,zh;q=0.9,en;q=0.8',
               'Cookie: sessionid=xxxxxxxxxx;', 'Sec-WebSocket-Key: y1H/4iwgf/4st9XYL0j+mg==',
               'Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits', '', '']
    key = 'y1H/4iwgf/4st9XYL0j+mg=='
    return headers, key


_handshake._get_handshake_headers = get_handshake_headers


def get_decrypt(data):
    data = {"data": data}
    url = f"http://127.0.0.1:3005/sign_64"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def run_thread(ws):
    for page in range(1, 101):
        ws.send(str(page))


def on_open(ws):
    thread.start_new_thread(run_thread, (ws,))


data_num = 0


def on_message(ws, message):
    res = get_decrypt(list(message))
    global data_num
    data_list = json.loads(res).get('data')
    for data in data_list:
        data_num += int(data.get('value'))
    print(data_num)


def challenge61():
    wss = "wss://www.python-spider.com/api/challenge64"
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(wss, on_message=on_message)
    ws.on_open = on_open
    ws.run_forever()


def run():
    challenge61()


if __name__ == '__main__':
    run()
