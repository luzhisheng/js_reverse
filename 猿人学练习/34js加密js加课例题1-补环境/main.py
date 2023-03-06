from parsel import Selector
import requests
import re


def get_hex_2_str(rnns, rind, sct):
    data = {"rind": rind, "rnns": rnns, "sct": sct}
    url = f"http://127.0.0.1:3005/sign_34"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge34(iloveu=''):
    url = "https://www.python-spider.com/challenge/34"
    session = requests.session()
    headers = {
        'cookie': f'sessionid=7da5y8hmpxhsazb024bdr0trejrnifey; iloveu={iloveu}'
    }
    session.headers = headers
    response = session.request("GET", url, headers=headers)
    return response.text, response.cookies


def run():
    response_text, response_cookies = challenge34()
    sct = requests.utils.dict_from_cookiejar(response_cookies).get('yuanrenxue34')
    response_text = response_text.replace(" ", "").replace("\n", "")
    rnns = re.findall(r'In2s(.*)//ashjgfg', response_text)[0]
    rind = re.findall(r'CZRvoWKAU(.*)//FDi5u', response_text)[0]
    rnns = rnns.replace('\\"=""*/="', "").replace('";', "")
    rind = rind.replace("*//**//**/", "")
    print(rnns, rind, sct)
    hex_2_str = get_hex_2_str(rnns, rind, sct)
    res_text, res_cookie = challenge34(hex_2_str)
    res = Selector(res_text)
    trS = res.xpath('//tr[@class="odd"]//td/text()').getall()
    Count = 0
    for tr in trS:
        Count += int(tr.strip())
    print('Count -->>', Count)


if __name__ == '__main__':
    run()
