import asyncio
from pyhttpx import WebSocketClient
import json


class WSS:
    def __init__(self, url=None, headers=None, loop=None):
        self.url = url
        self.headers = headers
        self.loop = loop
        self.ja3 = '771,19018-4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,' \
                   '0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,27242-29-23-24,0'
        self.exts_payload = {
            51: bytes.fromhex('00297a7a000100001d0020b63f4893bbdd23302f0c66799d94865ea63555b7d891a70aa65fd0aa0280132b'),
            45: bytes.fromhex('0101'),
            43: bytes.fromhex('06fafa03040303'),
            27: bytes.fromhex('020002')
        }

    async def connect(self):
        self.sock = await WebSocketClient(url=self.url, headers=self.headers, loop=self.loop,
                                          ja3=self.ja3, exts_payload=self.exts_payload
                                          ).connect()

    async def send(self):
        page = 1
        while True:
            await self.sock.send(str(page), binary=True)
            page += 1
            if page == 101:
                break

    async def recv(self):
        data_num = 0
        while True:
            r = await self.sock.recv()
            if str(r, encoding="utf-8") == '666':
                continue
            data_list = json.loads(r).get('data')
            for data in data_list:
                data_num += int(data.get('value'))
            print(data_num)


def main():
    loop = asyncio.get_event_loop()
    url = 'wss://www.python-spider.com/api/challenge62'
    headers = {
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh,zh-CN;q=0.9,en;q=0.8',
        'Cache-Control': 'no-cache',
        'Host': '127.0.0.1',
        'Pragma': 'no-cache',
        'Upgrade': 'websocket',
        'Connection': 'Upgrade',
        'Sec-WebSocket-Version': '13',
        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                      '(KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36'
    }

    wss = WSS(url, headers, loop)
    loop.run_until_complete(wss.connect())
    loop.create_task(wss.send())
    loop.create_task(wss.recv())
    loop.run_forever()


if __name__ == '__main__':
    main()
