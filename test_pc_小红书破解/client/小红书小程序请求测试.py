from docs.id import list_id
import requests
import time


class XhsXcx(object):

    def __init__(self):
        pass

    def run(self):
        for id in list_id:
            url = "https://www.xiaohongshu.com/fe_api/burdock/weixin/v2/note/{}/single_feed".format(id)
            headers = {
                'authorization': 'wxmp.4c6fa7d5-8751-4453-a886-6401cdd953a7',
                'device-fingerprint': 'WHJMrwNw1k/GZQYJgbVP1Irq79+1/x50vwPhQb9WmH+GMj97c11DRUYb7oUhF9Zw3hXir1Fx'
                                      'TYBNZiDZc844KroG+bVIN7nwqdCW1tldyDzmauSxIJm5Txg==1487582755342',
                'x-sign': 'X1c27dbbd4466ca4178fe2cba1c6713ff',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 8.1.0; Mi Note 3 Build/OPM1.171019.019; wv) '
                              'AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.62 XWEB/2887 '
                              'MMWEBSDK/201201 Mobile Safari/537.36 MMWEBID/6371 MicroMessenger/7.0.22.'
                              '1820(0x270016C6) Process/appbrand0 WeChat/arm64 Weixin NetType/WIFI Language'
                              '/zh_CN ABI/arm64 MiniProgramEnv/android'
            }
            response = requests.request("GET", url, headers=headers)
            print(response.text)
            time.sleep(1000)


class WebSignDownloaderMiddleware(object):
    screen_key = "WSUDD"

    def process_request(self, request, spider):
        _st = request.url.split(".com")[-1] + self.screen_key
        md5String = spider.general_method.get_md5(_st).lower()
        request.headers['x-sign'] = "X" + md5String


if __name__ == '__main__':
    xhs_xcx = XhsXcx()
    xhs_xcx.run()
