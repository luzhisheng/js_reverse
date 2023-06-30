from 抖音直播间弹幕.extractors.douyin_pb2 import PushFrame, Response, ChatMessage
from urllib.parse import unquote_plus
from websocket import WebSocketApp
import binascii
import requests
import json
import re
import gzip


def fetch_live_room_info(url):
    res = requests.get(
        url=url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                          "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        },
        # 可以是任意值
        cookies={
            "__ac_nonce": "063abcffa00ed8507d599"
        }
    )
    data_string = re.findall(r'<script id="RENDER_DATA" type="application/json">(.*?)</script>', res.text)[0]
    data_dict = json.loads(unquote_plus(data_string))

    room_id = data_dict['app']['initialState']['roomStore']['roomInfo']['roomId']
    room_title = data_dict['app']['initialState']['roomStore']['roomInfo']["room"]['title']
    room_user_count = data_dict['app']['initialState']['roomStore']['roomInfo']["room"]['user_count_str']

    wss_url = f"wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&" \
              f"webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&" \
              f"internal_ext=internal_src:dim|wss_push_room_id:{room_id}|wss_push_did:7241108041709241917|" \
              f"dim_log_id:2023062917400283AC7BE0CC82F20C1E37|fetch_time:1688031602253|seq:1|wss_info:" \
              f"0-1688031602253-0-0|wrds_kvs:InputPanelComponentSyncData-1687995896455064872_WebcastRoomStatsMessage" \
              f"-1688031596235825690_WebcastRoomRankMessage-1688031596293918081&cursor=u-1_h-1_t-1688031602253_r" \
              f"-1_d-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&maxCacheMessageNumber" \
              f"=20&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id=7241108041709241917&" \
              f"device_platform=web&cookie_enabled=true&screen_width=1920&screen_height=1080&" \
              f"browser_language=zh-CN&browser_platform=Linux%20x86_64&browser_name=Mozilla&" \
              f"browser_version=5.0%20(X11;%20Linux%20x86_64)%20AppleWebKit" \
              f"/537.36%20(KHTML,%20like%20Gecko)%20Chrome/114.0.0.0%20Safari/537.36&" \
              f"browser_online=true&tz_name=Asia/Shanghai&identity=audience&" \
              f"room_id={room_id}&heartbeatDuration=0&signature=R/4N4c1fR5u9h0PT"
    ttwid = res.cookies.get_dict()['ttwid']
    return room_id, room_title, room_user_count, wss_url, ttwid


def on_open(ws, content):
    print('on_open')


def on_message(ws, content):
    # s = binascii.b2a_hex(content)
    # print(s)
    frame = PushFrame()
    frame.ParseFromString(content)

    # 对PushFrame的 payload 内容进行gzip解压
    origin_bytes = gzip.decompress(frame.payload)

    # 根据Response+gzip解压数据，生成数据对象
    response = Response()
    response.ParseFromString(origin_bytes)

    if response.needAck:
        s = PushFrame()
        s.payloadType = "ack"
        s.payload = response.internalExt.encode('utf-8')
        s.logId = frame.logId

        ws.send(s.SerializeToString())

    # 获取数据内容（需根据不同method，使用不同的结构对象对 数据 进行解析）注意：此处只处理 WebcastChatMessage ，其他处理方式都是类似的。
    for item in response.messagesList:
        if item.method != "WebcastChatMessage":
            continue
        message = ChatMessage()
        message.ParseFromString(item.payload)
        info = f"【{message.user.nickName}】{message.content} "
        print(info)


def on_error(ws, content):
    print("on_error")


def on_close(ws, content):
    print("on_close")


def run():
    web_url = "https://live.douyin.com/22830168665"
    room_id, room_title, room_user_count, wss_url, ttwid = fetch_live_room_info(web_url)
    ws = WebSocketApp(
        url=wss_url,
        header={},
        cookie=f"ttwid={ttwid}",
        on_open=on_open,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close,
    )
    ws.run_forever()


if __name__ == '__main__':
    run()
