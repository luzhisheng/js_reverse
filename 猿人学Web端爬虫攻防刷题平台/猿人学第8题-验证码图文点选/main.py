import gan_rao_xian
import requests
import re
import base64

HEADERS = {
    'Proxy-Connection': 'keep-alive',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'User-Agent': 'yuanrenxue.project',
    'X-Requested-With': 'XMLHttpRequest',
    'Referer': 'http://match.yuanrenxue.com/match/8',
    'Accept-Language': 'zh-CN,zh;q=0.9'
}
SESSION = requests.session()
SESSION.headers = HEADERS


class YuanrenXuan(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.cn/api/match/8_verify"
        self.sum_value = 0

    def get_task(self):
        req = SESSION.get(self.url)
        text = re.findall(r'请依次点击：---<p>(.*)</p>--- <br>提示', req.json().get('html'))[0]
        text_list = text.split('</p>---<p>')
        img = re.findall(r'<img src="(.*)" alt="">', req.json().get('html'))[0]
        img = img.replace('data:image/jpeg;base64,', '')
        page_content = base64.b64decode(img)
        with open('img_a/a.png', 'wb') as f:
            f.write(page_content)
        return text_list

    def get_match(self, page, answer):
        url = f"https://match.yuanrenxue.cn/api/match/8"
        print(answer)
        params = (
            ('page', str(page)),
            ('answer', answer)
        )
        response = SESSION.get(url, params=params)
        return response.json()

    def run(self):
        num = 1
        data_num_list = []
        while True:
            text_list = self.get_task()
            print(text_list)
            answer_list = []
            text_dict = gan_rao_xian.run()
            print(text_dict)
            for text in text_list:
                answer_list.append(str(text_dict.get(text)))
            answer = '|'.join(answer_list)
            if 'None' in answer:
                continue
            data_list = self.get_match(num, answer).get('data')
            for data in data_list:
                data_num_list.append(int(data.get('value')))
            num += 1

            if num == 5:
                break
        print(data_num_list)


if __name__ == '__main__':
    a = YuanrenXuan()
    a.run()
