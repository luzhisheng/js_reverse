import json
import requests
import websocket

try:
    import thread
except ImportError:
    import _thread as thread


def run_thread(ws):
    for page in range(1, 101):
        data = get_decrypt(page)
        ws.send(json.dumps(data))


def on_open(ws):
    thread.start_new_thread(run_thread, (ws,))


def get_decrypt(page_num):
    data = {"pageNum": page_num}
    url = f"http://127.0.0.1:3005/sign_61"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


data_num = 0


def on_message(ws, message):
    global data_num
    data_list = json.loads(message).get('data')
    print(data_list)
    for data in data_list:
        data_num += int(data.get('value'))
    print(data_num)


def on_error(ws, error):
    print(ws)
    print(error)


def on_close(ws):
    print(ws)
    print("### closed ###")


def challenge61():
    wss = "wss://www.python-spider.com/api/challenge61"
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(wss, on_message=on_message, on_error=on_error, on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()


def run():
    challenge61()


if __name__ == '__main__':
    run()
