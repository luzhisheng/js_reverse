## 解体思路

有些网站，会验证提交的参数值，且是同键名不同值的字段，这个就是针对python爬虫的反制，因为python的字典里默认是不能出现同键名不同值的，想到这里，我突然想到headers有的网站会验证顺序，也就是有序的字典，因为python的字典默认也是无序的，不过不知道从哪个版本python3开始，python的字典也开始有点顺序了，而，我是记得requests里，给的headers=headers参数时，requests会自动的对headers字段做一定的排序处理

测试代码

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
                 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36'),
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
    
    
    req = requests.post('https://match.yuanrenxue.com/jssm', headers=Headers(), verify=False)
    print(req.cookies)
    print(req.headers)
    
输出结果

    {'Server': 'nginx', 'Date': 'Wed, 06 Apr 2022 05:55:00 GMT', 'Content-Type': 'image/jpg', 'Content-Length': '0', 'Connection': 'keep-alive', 'Vary': 'Cookie', 'Set-Cookie': 'sessionid=663n3wmn8sdhth9jt101kx3v14x82zaq; expires=Wed, 06 Apr 2022 11:54:59 GMT; HttpOnly; Max-Age=21600; Path=/; SameSite=Lax'}
    
最后提是一下，用 postman 测试请求也会存在此类问题