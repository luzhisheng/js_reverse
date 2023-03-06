from parsel import Selector
import requests
import execjs


def get_cookie(jsStr):
    data = {"jsStr": jsStr}
    url = f"http://0.0.0.0:3005/sign_11"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=data)
    return response.text


def challenge11(__jsl_clearance=''):
    url = "https://www.python-spider.com/challenge/11"
    session = requests.session()
    headers = {
        'cookie': f'sessionid=e03jd87ud4v1lhs6ywg0sgrq43ybe2f4; {__jsl_clearance}',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("GET", url)
    return response.text


def run():
    response_text = challenge11()
    js = response_text.replace('<script>', '').replace('</script>', '')
    js = js.replace('try{eval(', 'try{a = (')
    end_js = """
        function cookie_js() {
            return a
        }
    """
    js = execjs.compile(js + end_js)
    jsStr = js.call("cookie_js")
    cookie = get_cookie(jsStr)
    print(cookie)
    response_text = challenge11(cookie)
    print(response_text)
    res = Selector(response_text)
    trS = res.xpath('//tr[@class="odd"]//td/text()').getall()
    Count = 0
    for tr in trS:
        Count += int(tr.strip())
    print('Count -->>', Count)


if __name__ == '__main__':
    run()
