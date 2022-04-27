from pyDes import des
from pyDes import ECB
import base64
import time


def zeroPad(data):
    """
    zeroPadding
    """
    block_size = 8
    while len(data) % block_size:
        data += b"\0"
    return data


def desEncrypt(data, key):
    """des加密"""
    des_obj = des(key.encode(), mode=ECB)
    content = zeroPad(str(data).replace(" ", "").encode())
    print(base64.b64encode(des_obj.encrypt(content)).decode("utf-8"))
    return base64.b64encode(des_obj.encrypt(content)).decode("utf-8")


def mainEncrypt(jsText, rid, trace, organization):
    # 获取混淆解密函数obDecode，解密大数组
    # obDecode, jsArray = initObDecode(jsText)
    # params = getParams(jsText, obDecode, jsArray)
    params = {
        'nm': '4ee2f32f',
        'dy': 'aee9ca04',
        'lx': 'dec417a4',
        'xy': 'c179010f',
        'dl': '2575232a',
        'oe': '59bca469',
        'gi': 'bc1b5ed3',
        'aw': '013f32d6',
        'xp': 'ff19d8d3',
        'ux': '8d1339ba',
        'vk': '2323fc45'
    }

    result = {
        "rid": rid,
        "mr": "Yrtx2WucmA0=",
        "organization": organization,
        "rversion": "1.0.1",
        "ks": "reuBD+zMKCY=",
        "mh": "4H3yX9Azf7w=",
        "ga": "NNwlKRkNZmk=",
        "pz": "9rXyGPjRnCw=",
        "ostype": "web",
        "mi": "J0ydjVnS6GWRP+MYvENLqasfyGxBM+/A5zWEZMaZGTKy5iTNIij9ojytDG3NjnLKgRRYeCckrRRCNhbe2aKwGoGk2qBX4mZI9gDo59CKKiHYO665KC+AdIzotLMZ/Nj5YRYiSHP3YNna8EvkpCP3vxhA3fxo0t7H7cCeBiSfvhQ7IxVsjhW6OGPjlxnOxpQl",
        "act.os": "web_mobile",
        # "act.os": "web_pc",
        "ez": "0tmlyeKNyJA=",
        "callback": "sm_1651029963033",
        "sdkver": "1.1.3",
        "vl": "nz2ymU44kqg=",
        "kx": "8496EGvAN20=",
        "protocol": "155",
        "vb": "YuSSvLHvI2k=",
        "eg": "pkDpSt6wUfA="
    }

    keys = list(params.keys())
    # result[keys[0]] = desEncrypt(trace["mouseData"], params[keys[0]])
    # result[keys[1]] = desEncrypt(trace["endTime"] - trace["startTime"], params[keys[1]])
    # result[keys[2]] = desEncrypt(trace["trueWidth"], params[keys[2]])
    # result[keys[3]] = desEncrypt(trace["trueHeight"], params[keys[3]])
    # result[keys[4]] = desEncrypt(trace["mouseEndX"] / trace["trueWidth"], params[keys[4]])
    result[keys[5]] = desEncrypt(1, params[keys[5]])
    result[keys[6]] = desEncrypt(0, params[keys[6]])
    result[keys[7]] = desEncrypt(-1, params[keys[7]])
    result[keys[8]] = desEncrypt("default", params[keys[8]])
    result[keys[9]] = desEncrypt("web", params[keys[9]])
    result[keys[10]] = desEncrypt("zh-cn", params[keys[10]])
    result["callback"] = "sm_" + str(round(time.time() * 1000) + 1000)
    return result


# desEncrypt("zh-cn", "d020d8e2")
mainEncrypt("20220427112708f5275e8fdb7c0f6fe7", '', "eR46sBuqF0fdw7KWFLYa")
