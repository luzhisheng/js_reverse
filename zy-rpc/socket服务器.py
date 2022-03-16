import asyncio
import websockets
import time


async def echo(websocket, path):
    while True:
        t = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        await websocket.send(t)
        msg = await websocket.recv()
        print(msg)
        await asyncio.sleep(10)


asyncio.get_event_loop().run_until_complete(
    websockets.serve(echo, '127.0.0.1', 9999))
asyncio.get_event_loop().run_forever()
