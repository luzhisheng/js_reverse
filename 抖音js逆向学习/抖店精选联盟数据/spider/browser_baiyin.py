from multiprocessing import Queue
from selenium.webdriver.common.by import By
from selenium import webdriver
from base import Base
import time


class BrowserBaiyin(Base):

    def __init__(self, **kwargs):
        super(BrowserBaiyin, self).__init__()
        self.queue_list = Queue()
        self.flag = 0
        self.project_table = 'project_buyin_authorStatData'
        self.table = 'buyin_authorStatData_authorOverviewV2'
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

    def put_item(self):
        try:
            sql = f"SELECT task_id, payload_get, payload_post, deduplication FROM {self.project_table} " \
                  f"WHERE status = 0 ORDER BY weight DESC limit 10"
            msg = self.eb_supports.query(sql)
            if msg:
                for i in msg:
                    sql = f'update {self.project_table} set status = 1 ' \
                          f'where task_id="{i[0]}" and deduplication = "{i[3]}";'
                    self.eb_supports.do(sql)
                    self.queue_list.put(i)
            elif not msg:
                sql = f"update {self.project_table} set status = 0 where status = 1;"
                row_cnt = self.eb_supports.do(sql)
                self.log(f"重置任务-{self.project_table}-{row_cnt}个")
                return '找不到资源'
        except (Exception, ValueError) as e:
            return "put_item 握手失败"

    def get_sign_url(self, project_item):
        try:
            task_id = project_item[0]
            payload_get = project_item[1]
            payload_post = project_item[2]
            deduplication = project_item[3]
            self.browser.get(payload_get)
            time.sleep(15)
            elements_img = self.browser.find_elements(By.XPATH, '//div[@class="contact_way_info_block_item"]'
                                                                '//img[@elementtiming="element-timing"]')
            elements_img[0].click()
            time.sleep(5)
            elements_ck = self.browser.find_elements(By.XPATH, '//button[@class="auxo-btn auxo-btn-primary"]'
                                                               '/span[text()="查看"]')
            if elements_ck:
                elements_ck[0].click()

            if len(elements_img) > 1:
                elements_img[1].click()
            time.sleep(5)
            sql = f"SELECT task_id FROM {self.table} where deduplication = '{deduplication}' limit 1"
            msg = self.eb_supports.query(sql)
            if msg:
                sql = f"update {self.project_table} set status = 2 WHERE task_id='{task_id}'" \
                      f" and deduplication = '{deduplication}';"
                self.eb_supports.do(sql)
                self.log(f"入库成功 {task_id}-{deduplication}")
        except (Exception, ValueError) as e:
            print(e)
            pass

    def run(self):
        while True:
            time.sleep(0.2)
            if self.queue_list.qsize() > 0:
                try:
                    self.get_sign_url(self.queue_list.get())
                    self.flag = 0
                except (Exception, ValueError) as e:
                    raise ValueError(e)
            else:
                res = self.put_item()
                if "找不到资源" == res:
                    self.flag += 1
                    self.log(f"找不到资源-{self.flag}")
                    if self.flag == 2:
                        break
                elif "put_item 握手失败" == res:
                    raise ValueError(f"init_requests 握手失败")

    def close(self):
        self.browser.close()
        self.browser.quit()


if __name__ == "__main__":
    browser = BrowserBaiyin()
    browser.run()
    browser.close()
