import gan_rao_xian
import requests
import re
import base64


class YuanrenXuan(object):

    def __init__(self):
        self.url = "https://match.yuanrenxue.cn/api/match/8_verify"
        self.sum_value = 0

    def get_task(self):
        req = requests.get(self.url)
        text = re.findall(r'请依次点击：---<p>(.*)</p>--- <br>提示', req.json().get('html'))[0]
        text_list = text.split('</p>---<p>')
        img = re.findall(r'<img src="(.*)" alt="">', req.json().get('html'))[0]
        img = img.replace('data:image/jpeg;base64,', '')
        page_content = base64.b64decode(img)
        with open('img_a/a.png', 'wb') as f:
            f.write(page_content)
        return text_list

    def get_match(self, page, answer):
        url = f"https://match.yuanrenxue.cn/api/match/8?page={page}&answer={answer}"
        payload = {}
        headers = {
            'cookie': 'sessionid=iikaj9bo7vzqv4mz1xvryl13o7z98l13;'
        }
        response = requests.request("GET", url, headers=headers, data=payload)
        print(response.json())

    def run(self):
        num = 1
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
            print(num, answer)
            self.get_match(num, answer)
            num += 1

            if num == 5:
                break

            exit()


if __name__ == '__main__':
    a = YuanrenXuan()
    a.run()
