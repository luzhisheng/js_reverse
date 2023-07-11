from multiprocessing import Queue
from selenium import webdriver
from spider.base import Base
import time


class BrowserBaiyin(Base):

    def __init__(self, **kwargs):
        super(BrowserBaiyin, self).__init__()
        self.queue_list = Queue()
        self.status_type = "status"
        executablePath = r"../file/chromedriver"
        self.executablePath = kwargs.get("executablePath", executablePath)
        options = webdriver.ChromeOptions()
        # 配置代码
        options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
        options.add_argument("--headless")
        self.options = {
            "headless": True,
            "handleSIGINT": True,
            "handleSIGTERM": True,
            "handleSIGHUP": True,
        }
        if self.executablePath is not None:
            self.options["executablePath"] = self.executablePath
        self.browser = webdriver.Chrome(executable_path=self.executablePath, chrome_options=options)
        self.browser.get('https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?'
                         'log_id=20230711105437315B137C5F87A4BE6336&uid=v2_0a2773177a04f52dbfb23f61609cd2843a31e9'
                         '22c1355db72de16fe32292f85d99c03dccc7e02117d81a4b0a3cb4d3fab4e8644e5431d4dab3370b9ab0092'
                         '5112a189a90e5d239f9b2a2e4b688f3db83682da9c158e6903c09d6b97e7f6cc1cea0defaf6c57672a72510'
                         'da95b60d18e5ade4c90120012201039e3ecc30')

    def get_sign_url(self, keywords):
        try:
            pass
        except Exception:
            pass

    def run(self):
        while True:
            self.log(f"等待 2 秒")
            time.sleep(2)
            self.get_sign_url('JY20220616004390')

    def close(self):
        self.browser.close()
        self.browser.quit()


if __name__ == "__main__":
    browser = BrowserBaiyin()
    browser.run()
    browser.close()
