from DrissionPage import ChromiumPage, ChromiumOptions
import json
import time
import re
import random
import datetime


class Detail(object):

    def __init__(self):
        co = ChromiumOptions()
        co.auto_port()
        self.page = ChromiumPage(co)
        self.page.listen.start('https://detail.1688.com/offer/643272204627.html')

    def slide(self):
        """
        滑动代码
        :return:
        """
        ele = self.page.wait.eles_loaded("x://span[contains(@id,'nc_1_n1z')]", timeout=20)
        if ele:
            ele = self.page.ele("#nc_1_n1t")
            time.sleep(3)
            ele.hover()
            self.page.actions.hold('#nc_1_n1z')
            self.page.actions.move(100, duration=random.random())
            self.page.actions.move(100, duration=random.random())
            self.page.actions.move(59, duration=3)

    def request_body(self):
        url = 'https://detail.1688.com/offer/643272204627.html'
        self.page.get(url)
        res = self.page.listen.wait()
        pattern = r'window\.__INIT_DATA\s*=\s*(\{.*?\})\s*</script>'
        match = re.search(pattern, res.response.body)
        try:
            json_data = match.group(1)
            dict_data = json.loads(json_data)
            temp_model = dict_data.get('globalData').get('tempModel')
            print(datetime.datetime.now())
            print(temp_model)
        except Exception as e:
            print(e)
            self.slide()
            if self.page.wait.eles_loaded("#recyclerview"):
                print('过滑动成功')
            elif self.page.wait.eles_loaded("#nc_1_refresh1"):
                print('滑动失败')
                # 需要继续处理.......
            elif self.page.wait.eles_loaded("#login-form"):
                print('需要登陆/换IP')
                # 需要继续处理.......

    def run(self):
        for i in range(1, 100000):
            self.request_body()


if __name__ == '__main__':
    detail = Detail()
    detail.run()
