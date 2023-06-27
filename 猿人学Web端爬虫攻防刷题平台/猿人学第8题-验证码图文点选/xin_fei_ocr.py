from wsgiref.handlers import format_date_time
from datetime import datetime
from time import mktime
import hashlib
import base64
import hmac
from urllib.parse import urlencode
import json
import requests


class AssembleHeaderException(Exception):
    def __init__(self, msg):
        self.message = msg


class Url:
    def __init__(this, host, path, schema):
        this.host = host
        this.path = path
        this.schema = schema


class UniversalOcr(object):
    def __init__(self, appid, apikey, apisecret):
        self.appid = appid
        self.apikey = apikey
        self.apisecret = apisecret
        self.url = 'http://api.xf-yun.com/v1/private/hh_ocr_recognize_doc'

    def parse_url(self, requset_url):
        stidx = requset_url.index("://")
        host = requset_url[stidx + 3:]
        schema = requset_url[:stidx + 3]
        edidx = host.index("/")
        if edidx <= 0:
            raise AssembleHeaderException("invalid request url:" + requset_url)
        path = host[edidx:]
        host = host[:edidx]
        u = Url(host, path, schema)
        return u

    def get_body(self, file_path):
        # 将payload中数据替换成实际能力内容，参考不同能力接口文档请求数据中payload
        file = open(file_path, 'rb')
        buf = file.read()
        body = {
            "header": {
                "app_id": self.appid,
                "status": 3
            },
            "parameter": {
                "hh_ocr_recognize_doc": {
                    "recognizeDocumentRes": {
                        "encoding": "utf8",
                        "compress": "raw",
                        "format": "json"
                    }
                }
            },
            "payload": {
                "image": {
                    "encoding": "jpg",
                    "image": str(base64.b64encode(buf), 'utf-8'),
                    "status": 3
                }
            }
        }
        return body


def assemble_ws_auth_url(universal_ocr):
    requset_url = universal_ocr.url
    u = universal_ocr.parse_url(requset_url)
    api_key = universal_ocr.apikey
    api_secret = universal_ocr.apisecret
    host = u.host
    path = u.path
    now = datetime.now()
    date = format_date_time(mktime(now.timetuple()))
    signature_origin = "host: {}\ndate: {}\n{} {} HTTP/1.1".format(host, date, "POST", path)
    signature_sha = hmac.new(api_secret.encode('utf-8'), signature_origin.encode('utf-8'),
                             digestmod=hashlib.sha256).digest()
    signature_sha = base64.b64encode(signature_sha).decode(encoding='utf-8')
    authorization_origin = "api_key=\"%s\", algorithm=\"%s\", headers=\"%s\", signature=\"%s\"" % (
        api_key, "hmac-sha256", "host date request-line", signature_sha)
    authorization = base64.b64encode(authorization_origin.encode('utf-8')).decode(encoding='utf-8')
    values = {
        "host": host,
        "date": date,
        "authorization": authorization
    }
    return requset_url + "?" + urlencode(values)


def get_result(universal_ocr, file_path):
    request_url = assemble_ws_auth_url(universal_ocr)
    headers = {'content-type': "application/json", 'host': 'api.xf-yun.com', 'appid': 'APPID'}
    body = universal_ocr.get_body(file_path=file_path)
    response = requests.post(request_url, data=json.dumps(body), headers=headers)
    re = response.content.decode('utf8')
    str_result = json.loads(re)
    if str_result.__contains__('header') and str_result['header']['code'] == 0:
        renew_text = str_result['payload']['recognizeDocumentRes']['text']
        return json.loads(base64.b64decode(renew_text))


def run_ocr(file_path):
    appid = "xxxx"
    apisecret = "xxxx"
    apikey = "xxxxx"
    universal_ocr = UniversalOcr(appid, apikey, apisecret)
    res = get_result(universal_ocr, file_path)
    return res.get('whole_text')


if __name__ == "__main__":
    file_path = "./img_a/f-6.jpg"
    res = run_ocr(file_path)
    print(res)

