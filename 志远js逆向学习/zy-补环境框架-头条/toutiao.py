import requests,time

def jrtt():
    s = requests.session()
    s.get('https://www.toutiao.com/')
    data = {'ps':'0'}
    local_server = s.post('http://127.0.0.1:3000/tt',data=data).json()
    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
        'referer': 'https://www.toutiao.com/',

    }
    res = s.get(local_server['msg'],headers=headers).json()
    print(res)

    while True:

        data = {'ps': res['next']['max_behot_time']}
        local_server = s.post('http://127.0.0.1:3000/tt', data=data).json()
        res = s.get(local_server['msg'],headers=headers)
        if res.status_code == 200:
            res = res.json()

            print(res)
            time.sleep(3)
        else:
            print(res.status_code)
            time.sleep(3)
if __name__ == '__main__':
    jrtt()
