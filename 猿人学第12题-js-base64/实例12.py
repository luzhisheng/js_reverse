import requests
import base64
import json


def get_num():

    num = 0
    for i in range(1, 6):
        con_str = 'yuanrenxue' + str(i)
        ba_str = base64.b64encode(con_str.encode()).decode()
        url = f"https://match.yuanrenxue.com/api/match/12?page={i}&m={ba_str}"
        Headers = {
            "user-agent": "yuanrenxue.project",
            "cookie": "Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1648698333,1648863299; "
                      "Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1648718340,1648863297; "
                      "no-alert3=true; m=155; tk=7332741390523673465; sessionid=ac0xs5o2sopkirmvude3epvr8uzo8w66;"
                      " Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1649313675; "
                      "Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1649316025"
        }
        res = requests.get(url=url, headers=Headers)
        res_dict = json.loads(res.text)
        data = res_dict.get('data')
        for i in data:
            num += i['value']
    print(num)


get_num()
