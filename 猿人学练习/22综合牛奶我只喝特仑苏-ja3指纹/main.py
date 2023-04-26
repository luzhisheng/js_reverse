import pycurl
import json
# 打印看下pycurl的版本是否和文章中的一致
print(pycurl.version)
result = 0


def my_func(data):
    global result
    d = json.loads(data)['data']
    for i in d:
        result += int(i['value'])
    print(result)


headers = [
    'Host: www.python-spider.com',
    'accept: application/json, text/javascript, */*; q=0.01',
    'accept-language: zh-CN,zh;q=0.9',
    'content-type: application/x-www-form-urlencoded; charset=UTF-8',
    'cookie: 你的cookie',
    'origin: https://www.python-spider.com',
    'referer: https://www.python-spider.com/challenge/22',
    'sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
    'sec-ch-ua-mobile: ?0',
    'sec-ch-ua-platform: "Windows"',
    'sec-fetch-dest: empty',
    'sec-fetch-mode: cors',
    'sec-fetch-site: same-origin',
    'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
    ' Chrome/103.0.0.0 Safari/537.36',
    'x-requested-with: XMLHttpRequest'
]

curl = pycurl.Curl()

curl.setopt(
    curl.SSL_CIPHER_LIST,
    'TLS_AES_128_GCM_SHA256,TLS_AES_256_GCM_SHA384,'
    'TLS_CHACHA20_POLY1305_SHA256,ECDHE-ECDSA-AES128-GCM-SHA256,'
    'ECDHE-RSA-AES128-GCM-SHA256,ECDHE-ECDSA-AES256-GCM-SHA384,'
    'ECDHE-RSA-AES256-GCM-SHA384,ECDHE-ECDSA-CHACHA20-POLY1305,'
    'ECDHE-RSA-CHACHA20-POLY1305,ECDHE-RSA-AES128-SHA,ECDHE-RSA-AES256-SHA,'
    'AES128-GCM-SHA256,AES256-GCM-SHA384,AES128-SHA,AES256-SHA'
)

curl.setopt(curl.HTTP_VERSION, curl.CURL_HTTP_VERSION_2_0)
curl.setopt(curl.SSLVERSION, curl.SSLVERSION_TLSv1_2)
curl.setopt(curl.SSL_ENABLE_NPN, 0)
curl.setopt(curl.SSL_ENABLE_ALPS, 1)
curl.setopt(curl.SSL_CERT_COMPRESSION, "brotli")
curl.setopt(pycurl.HTTP2_PSEUDO_HEADERS_ORDER, "masp")
curl.setopt(pycurl.HTTPHEADER, headers)

# my_func是处理数据返回的回调事件
curl.setopt(pycurl.WRITEFUNCTION, my_func)
url = 'https://www.python-spider.com/api/challenge22'
for i in range(1, 101):
    data = "page={}".format(i)
    curl.setopt(pycurl.POSTFIELDS, data)
    curl.setopt(pycurl.URL, url)
    curl.perform()

curl.close()
