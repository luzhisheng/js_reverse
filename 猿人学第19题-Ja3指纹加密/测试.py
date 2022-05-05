import requests
import json
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.ssl_ import create_urllib3_context

CIPHERS = (
    'ECDH+AESGCM:DH+AESGCM:ECDH+AES256:DH+AES256:RSA+3DES:!aNULL:'
    '!eNULL:!MD5'
)


class DESAdapter(HTTPAdapter):
    def init_poolmanager(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).init_poolmanager(*args, **kwargs)

    def proxy_manager_for(self, *args, **kwargs):
        context = create_urllib3_context(ciphers=CIPHERS)
        kwargs['ssl_context'] = context
        return super(DESAdapter, self).proxy_manager_for(*args, **kwargs)


s = requests.Session()
s.mount('https://match.yuanrenxue.com', DESAdapter())


def get_num(s):
    num = 0
    for i in range(1, 6):
        url = f"https://match.yuanrenxue.com/api/match/19?page={i}"
        Headers = {
            "user-agent": "yuanrenxue.project",
            "cookie": "sessionid=8rrqpz36de5lnyebo9jfg4bkzkda7vgt;"
        }
        res = s.get(url=url, headers=Headers)
        res_dict = json.loads(res.text)
        print(res_dict)
        data = res_dict.get('data')
        for i in data:
            num += i['value']
    print(num)


get_num(s)
