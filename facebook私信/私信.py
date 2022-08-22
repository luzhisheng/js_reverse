import asyncio
import websockets


async def echo(websocket, path):
    async for message in websocket:
        message = "我收到了你的消息: {}".format(message)
        await websocket.send(message)

asyncio.get_event_loop().run_until_complete(websockets.serve(echo, 'localhost', 8765))
asyncio.get_event_loop().run_forever()
