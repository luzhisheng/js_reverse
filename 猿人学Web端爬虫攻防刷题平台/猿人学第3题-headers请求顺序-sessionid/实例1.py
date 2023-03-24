import requests


class Headers(object):
    def items(self):
        return (
            ('content-length', '0'),
            ('pragma', 'no-cache'),
            ('cache-control', 'no-cache'),
            ('sec-ch-ua', '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"'),
            ('sec-ch-ua-mobile', '?0'),
            ('user-agent',
             'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
             ' (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'),
            ('sec-ch-ua-platform', '"macOS"'),
            ('accept', '*/*'),
            ('origin', 'https://match.yuanrenxue.com'),
            ('sec-fetch-site', 'same-origin'),
            ('sec-fetch-mode', 'cors'),
            ('sec-fetch-dest', 'empty'),
            ('referer', 'https://match.yuanrenxue.com/match/3'),
            ('accept-encoding', 'gzip, deflate, br'),
            ('accept-language', 'zh-CN,zh;q=0.9'),
            ('cookie', 'Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1648698333,1648863299'),
            ('cookie', 'Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1648718340,1648863297'),
            ('cookie', 'no-alert3=true'),
            ('cookie', 'sessionid=6k0qhqvkp2jwtcph63e3k6ft7nwbl8ov'),
            ('cookie', 'm=155'),
            ('cookie', 'tk=9019357195599414472'),
            ('cookie', 'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1649223546'),
            ('cookie', 'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1649224147'),
        )


req = requests.post('https://match.yuanrenxue.com/jssm', headers=Headers())
print(req.headers)
