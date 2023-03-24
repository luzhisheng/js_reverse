import asyncio
from aiowebsocket.converses import AioWebSocket


async def startup(uri):
    async with AioWebSocket(uri) as aws:
        converse = aws.manipulator

        # 给服务端发送验证消息，观察网页接口数据动态获取
        message = '{"request_id":54,"type":3,"payload":"{\"version_id\":\"5374491402668733\",\"tasks\":[{\"label\":\"46\",\"payload\":\"{\\\"thread_id\\\":100010764288690,\\\"otid\\\":\\\"6967776862074270634\\\",\\\"source\\\":1966082,\\\"send_type\\\":1,\\\"text\\\":\\\"在最早在最早在最早在\\\",\\\"initiating_source\\\":0,\\\"skip_url_preview_gen\\\":0}\",\"queue_name\":\"100010764288690\",\"task_id\":13,\"failure_count\":null},{\"label\":\"21\",\"payload\":\"{\\\"thread_id\\\":100010764288690,\\\"last_read_watermark_ts\\\":1661247458952,\\\"sync_group\\\":1}\",\"queue_name\":\"100010764288690\",\"task_id\":14,\"failure_count\":null}],\"epoch_id\":6967776862243990774,\"data_trace_id\":\"#SHgGQS0HTdSm+u12zRK3wA\"}","app_id":"2220391788200892"}'
        await converse.send(message)

        while True:
            receive = await converse.receive()
            # 拿到的是byte类型数据，解码为字符串数据
            print(receive.decode())


if __name__ == '__main__':
    remote = 'wss://edge-chat.facebook.com/chat?region=prn&sid=5144947822952447&cid=17bf7923-1b48-488f-b1c9-311faaaa6715'
    asyncio.get_event_loop().run_until_complete(startup(remote))
