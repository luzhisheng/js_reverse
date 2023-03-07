import requests


class Baidu搜索(object):

    def __init__(self):
        self.url_search = "https://www.baidu.com/s?wd=aaa"

    def get_baidu_s(self):
        headers = {
            'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
                          ' Chrome/87.0.4280.141 Safari/537.36',
        }
        response = requests.request("GET", self.url_search, headers=headers)
        print(response.headers)
        html_set_cookie = requests.utils.dict_from_cookiejar(response.cookies)
        print(html_set_cookie)

    def get_static_captcha_tuxing(self):
        url = "https://wappass.baidu.com/static/captcha/tuxing.html?&logid={}&ak={}&backurl" \
              "=https%3A%2F%2Fwww.baidu.com%2Fs%3Fwd%3D{}&signature={}&timestamp={}"
        response = requests.request("GET", url)
        print(response.text)

    def run(self):
        self.get_baidu_s()


if __name__ == '__main__':
    baidu_search = Baidu搜索()
    baidu_search.run()
