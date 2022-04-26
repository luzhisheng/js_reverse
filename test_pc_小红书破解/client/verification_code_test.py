import requests
import json
import time
import re
import ddddocr
from io import BytesIO


class VerificationCode(object):

    def __init__(self):
        self.url = "https://www.xiaohongshu.com/fe_api/burdock/v2/shield/captcha?c=pp"
        self.register_url = "https://captcha.fengkongcloud.cn/ca/v1/register?channel=web&sdkver=1.1.3&" \
                            "callback=sm_{}&data=%7B%7D&lang=zh-cn&organization=eR46sBuqF0fdw7KWFLYa&" \
                            "rversion=1.0.1&model=slide&appId=default"

    def get_xsign(self, url):
        screen_key = "WSUDD"
        _st = url.split(".com")[-1] + screen_key
        import hashlib
        m = hashlib.md5()
        m.update(_st.encode(encoding='UTF-8'))
        md5String = m.hexdigest()
        return "X" + md5String

    def get_register(self, organization):
        """
        注册验证码
        """
        url = 'https://captcha.fengkongcloud.com/ca/v1/register'

        args = {
            'organization': organization,
            'channel': 'web',
            'lang': 'zh-cn',
            'model': 'slide',
            'appId': 'default',
            'sdkver': '1.1.3',
            'data': '{}',
            'rversion': '1.0.1',
            'callback': 'sm_{}'.format(int(time.time() * 1000))
        }
        r = requests.get(url, params=args)
        res_dict = json.loads(re.search(r'{}\((.*)\)'.format(args['callback']), r.text).group(1))
        return res_dict

    def get_distance(self):
        det = ddddocr.DdddOcr(det=False, ocr=False)
        with open('fg.png', 'rb') as f:
            target_bytes = f.read()

        with open('bg.png', 'rb') as f:
            background_bytes = f.read()
        res = det.slide_match(target_bytes, background_bytes)
        return res

    def get_img(self, resp):
        domain = resp['detail']['domains'][0]
        fg_uri = resp['detail']['fg']
        bg_uri = resp['detail']['bg']

        fg_url = ''.join(['http://', domain, fg_uri])
        bg_url = ''.join(['http://', domain, bg_uri])

        r = requests.get(fg_url, verify=False)
        with open('./fg.png', 'wb') as f:
            f.write(r.content)

        r = requests.get(bg_url, verify=False)
        with open('./bg.png', 'wb') as f:
            f.write(r.content)

    def reply_xhs(self, rid):
        data = {
            "callFrom": "web",
            "deviceId": "WHJMrwNw1k/Gs2cUNYdnG56AD/SZS9gey8vWaQeDLA8EFEBdCYqjjTrzf2N93wBwGOQN6K4s0Qj5MjjwI6kD9EpFI4QMMTnohdCW1tldyDzmQI99+chXEipSD+UbxzZNMYp5HxsF710xV3HH8Acmv+xkp+XcdgI9keu8bpbMPuOTJc3aMEBGDbIs5e+HU82qGkupQmWmZ4uAGnABEyJ3C2820Aq9yQJefPPPZTTXS5eGePw3N8ql871Hk5GmQWNmIBMuR2wgYcQ3eAN6bmZ5qTw==1487582755342",
            "rid": rid,
            "status": 1,
        }
        x_sign = self.get_xsign(self.url)

        headers = {
            'x-sign': x_sign,
            'Referer': 'https://www.xiaohongshu.com/website-login/captcha?redirectPath='
                       'http%3A%2F%2Fwww.xiaohongshu.com%2Fdiscovery%2Fitem%2F5e'
                       'da14da000000000100037c%3Fxhsshare%3DCopyLink%26appuid%3D5e5e2c1100000000'
                       '01004481%26apptime%3D1593771484',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/94.0.4606.81 Safari/537.36',
            'sec-fetch-site': 'same-origin',
            'origin': 'www.xiaohongshu.com',

        }

        response = requests.post(self.url, headers=headers, json=data, timeout=10)
        response = json.loads(response.text)
        print(response)

    def run(self):
        organization = 'eR46sBuqF0fdw7KWFLYa'
        # 注册验证码
        res_dict = self.get_register(organization)

        # 获取rid
        rid = res_dict['detail']['rid']
        print(rid)

        # 获取图片
        self.get_img(res_dict)

        # 计算滑动距离
        res = self.get_distance()
        print(res)

        #

        self.reply_xhs(rid)


if __name__ == '__main__':
    v = VerificationCode()
    v.run()
