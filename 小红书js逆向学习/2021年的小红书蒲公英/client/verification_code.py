import base64
import re
import cv2
import json
import time
import requests
import numpy as np
from pyDes import ECB
from pyDes import des
from urllib import parse
import gc
import traceback
r = requests.session()
r.keep_alive = False

jscode = '''
var f = function(value) {
        var standard = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        var str = ''
          , result = '';
        for (var a = 0, b, c, d = 0;
            c = value['charAt'](d++);
            ~c && (b = a % 4 ? b * 64 + c : c,a++ % 4) ? str += String['fromCharCode'](255 & b >> (-2 * a & 6)) : 0) {
            c = standard['indexOf'](c);
        }
        for (var i = 0, length = str['length']; i < length; i++) {
            result += '%' + ('00' + str['charCodeAt'](i)['toString'](16))['slice'](-2);
        }
        return decodeURIComponent(result)
    };
'''


def pyObDecode(value):
    standard = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
    string = ''
    result = ''
    a = 0
    b = 0
    d = 0
    c = value[d]
    while True:
        try:
            c = value[d]
        except:
            break
        d += 1
        c = standard.index(c)
        if a % 4:
            b = b * 64 + c
        else:
            b = c
        end = a % 4
        a += 1
        if -c - 1 and end:
            string += chr(255 & b >> (-2 * a & 6))
    i = 0
    length = len(string)
    while i < length:
        result += '%' + ('00' + hex(ord(string[i])))[-2:]
        i += 1
    return parse.unquote(result)


def parseInt(value):
    s = ""
    for v in value:
        if v.isdigit():
            s += v
        else:
            break
    if s == "":
        s = "None"
    return int(s)


def re_get(url, headers, params=None):
    while True:
        try:
            response = r.get(url, headers=headers, params=params, timeout=10)
            return response
        except:
            print(traceback.format_exc())
            time.sleep(3)
            continue


def requestConfig():
    configUrl = "https://captcha.fengkongcloud.com/ca/v1/conf"
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'referer': 'https://www.xiaohongshu.com/',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,'
                      ' like Gecko) Chrome/94.0.4606.81 Safari/537.36'
    }
    params = {'lang': 'zh-cn',
              'model': 'slide',
              'sdkver': '1.1.3',
              'callback': 'sm_' + str(round(time.time() * 1000) + 1199),
              'rversion': '1.0.1',
              'appId': 'default',
              'organization': 'eR46sBuqF0fdw7KWFLYa',
              "channel": "web",
              }

    configResponse = re_get(configUrl, headers, params)
    r.close()
    return configResponse.text


def parseConfigText(configText):
    start = re.search('"js":"', configText).span()[1]
    end = re.search('\.js', configText).span()[1]
    jsUrl = configText[start:end]
    return "PASS" in configText, jsUrl


def getProtocol(jsUrl):
    # jsUrl = "/pr/auto-build/v1.0.3-126/captcha-sdk.min.js"
    result = re.search("\d\d\d", jsUrl)
    protocol = result.group()
    rversion = re.search("\d\.\d\.\d", jsUrl).group()
    return protocol, rversion


def requestCapatureJs(jsPath):
    jsUrl = "https://castatic.fengkongcloud.com" + jsPath
    headers = {

        'Connection': 'keep-alive',
        'Sec-Fetch-Mode': 'no-cors',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                      ' (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        'Accept': '*/*',
        # 'X-Requested-With': 'com.baidu.searchbox',
        'Sec-Fetch-Site': 'cross-site',
        'Referer': 'https://www.xiaohongshu.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',

    }
    # jsResponse = r.get(jsUrl, headers=headers, timeout=10)
    jsResponse = re_get(jsUrl, headers)
    r.close()

    return jsResponse.text


def getInitArray(obDecodeText):
    # var _0x2c88=['BevNqMrLzgfVtgvNyw1P'....'y1joD0y'];var _0x5e6ac7
    # 获取初始的解密大数组 _0x2c88
    obDecodeArrayStart = re.search("var _\w{6,9}=\['", obDecodeText).span()[1] - 2
    obDecodeArrayEnd = re.search("'\];", obDecodeText).span()[1] - 1

    obDecodeArray = eval(obDecodeText[obDecodeArrayStart:obDecodeArrayEnd])
    return obDecodeArray


def getCaculatePattern(arrayGetInitLoc, obDecodeArray, argsLoc, caculateText):
    decodeParseArgs = []
    for loc in argsLoc:
        # strvalue = vvv.call( "f", jsArray[loc - start] )
        parseArg = pyObDecode(obDecodeArray[loc - arrayGetInitLoc])

        decodeParseArgs.append(parseArg)

    # 将_0x16f195(0x572) 替换为%r，最后使用eval执行语句
    msgList = re.findall("_\w{6,9}\(\w{3,9}\)", caculateText, )
    msg = caculateText
    for i in range(len(msgList)):
        msg = msg.replace(msgList[i], "'" + decodeParseArgs[i] + "'")

    return msg


def moveArray(obDecodeArray, obDecodeText):
    # 对初始的解密大数组_0x2c88，进行移动

    # (function(_0x116e31,_0x3c9760){..._0x116e31['push'](_0x116e31['shift']())...}(_0x2c88,0x92900)
    # 获取对大数组移动的次数 0x92900
    arrayMoveCount = re.findall(",(.*?)\)", obDecodeText, re.S)[-1]
    arrayMoveCount = int(arrayMoveCount, 16)

    # ){_0x160e49=_0x160e49-0x152;var _0x45155f=_0x2c88[_0x160e49];

    # 获取从数组中获取的起始位置  0x152

    arrayGetInitLoc = re.search("\)\{\w{6,9}=_\w{6,9}-\w{3,9};var", obDecodeText).group()
    arrayGetInitLoc = int(arrayGetInitLoc[arrayGetInitLoc.index("-") + 1:arrayGetInitLoc.index(";")], 16)

    # 获取数组终止移动的条件 var _0x3314bc=-parseInt(_0x16f195(0x572))*...-parseInt(_0x16f195(0x5c0));
    caculateText = re.search("=-parse.*\)\);if\(_\w{6,9}===", obDecodeText).group()
    caculateText = caculateText[1:-16]

    # 获取parseInt的参数 _0x16f195(0x572)
    argsLoc = []
    encodeParseArgs = re.findall("_0x\w{4,9}\(\w{3,9}\)\)", caculateText)
    for arg in encodeParseArgs:
        arg = arg[arg.index("(") + 1:arg.index(")")]
        argLoc = int(arg, 16)
        argsLoc.append(argLoc)
    i = 0
    # 移动数组
    while i < 1000000:
        i += 1
        try:

            # 获取最终表达式
            msg = getCaculatePattern(arrayGetInitLoc, obDecodeArray, argsLoc, caculateText)

            stopMoveCondition = eval(msg)

            # 满足条件，终止交换
            if arrayMoveCount == stopMoveCondition:

                break
            else:
                obDecodeArray.append(obDecodeArray.pop(0))
        except Exception as e:
            obDecodeArray.append(obDecodeArray.pop(0))

    return obDecodeArray


def initObDecode(jsText):
    # 获取混淆解密部分的文本，即轨迹加密前的js文本
    obDecodeText = re.search(";\}\}\}\(_\w{6,9},\w{6,9}\),function\(\w{6,9},", jsText).span()[1]
    obDecodeText = jsText[:obDecodeText - 20]

    # ;function _0x19bb(_0x2ee4e1,_0x231fa0)
    # 获取混淆解密函数名字_0x19bb
    obDecode = re.search(";function _\w{6,9}\(_\w{6,9},_\w{6,9}\)\{", obDecodeText).group()
    obDecode = obDecode[obDecode.index("ion ") + 4:obDecode.index("(")]

    # ;var _0x5e6ac7=_0x19bb;function
    # 获取混淆机密函数名字赋值的函数_0x5e6ac7
    obDecodeCopy = re.search("var _\w{6,9}=" + obDecode, obDecodeText).group()
    obDecodeCopy = obDecodeCopy[obDecodeCopy.index("var "):obDecodeCopy.index(obDecode)]
    obDecodeCopy = obDecodeCopy[4:-1]

    # 获取初始的解密大数组
    obDecodeArray = getInitArray(obDecodeText)  # 匹配开头的大数组

    obDecodeArray = moveArray(obDecodeArray, obDecodeText)

    return obDecodeCopy, obDecodeArray


def static(str):
    digitNum = 0
    letterNum = 0
    if len(str) == 8:
        for s in str:
            if s.isdigit():
                digitNum += 1
            if s.isalpha() and s.islower():
                letterNum += 1
    return letterNum, digitNum


def getStart(jsText):
    value = re.search("\)\{\w{6,9}=_\w{6,9}-\w{3,9};var", jsText).group()

    return (value[value.index("-") + 1:value.index(";")])


def getParams(jsText, f, jsArray):
    # getStart( jsText )
    keys = re.findall("'[a-z][a-z]'", jsText)

    keys = keys[9:21]  # 获取传输的key
    params = {}
    argumentText = jsText[jsText.index(keys[0]) - 50:]  # argumentText
    for i in range(len(keys) - 1):
        startKey = keys[i]
        endKey = keys[i + 1]
        start = argumentText.index(startKey)  # 匹配 _0x28c7f6(0x2fc) 加密key
        end = argumentText.index(endKey) + 4
        text = argumentText[start:end]
        values = text.split(",")
        desKey = ""
        for value in values:

            if f in value and "(" in value and ")" in value:
                # v = vm.call(f,value[9:14])
                s = value.index("(")

                e = value.index(")")

                sss = int(getStart(jsText), 16)

                # v = vvv.call("f",jsArray[int(value[s+1:e], 16)-sss])
                v = pyObDecode(jsArray[int(value[s + 1:e], 16) - sss])

                letterNum, digitNum = static(v)
                if letterNum >= 1 and digitNum >= 1 and letterNum + digitNum == 8:
                    desKey = v
                if digitNum == 8:
                    desKey = v
            if len(value) == 10:
                v = eval(value)
                letterNum, digitNum = static(v)
                if letterNum >= 1 and digitNum >= 1 and letterNum + digitNum == 8:
                    desKey = v
                if digitNum == 8:
                    desKey = v
        params[eval(startKey)[::-1]] = desKey[::-1]

    return params


# ----------------------------


def requestRegister():
    params = {
        'callback': 'sm_' + str(round(time.time() * 100)),
        "lang": "zh-cn",
        "channel": "web",
        "rversion": "1.0.1",
        "data": {},
        "model": "slide",
        "appId": "default",
        "organization": "eR46sBuqF0fdw7KWFLYa",
        "sdkver": "1.1.3",
    }
    headers = {
        'Connection': 'keep-alive',
        'Sec-Fetch-Mode': 'no-cors',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        'Accept': '*/*',
        # 'X-Requested-With': 'com.baidu.searchbox',
        'Sec-Fetch-Site': 'cross-site',
        'Referer': 'https://www.xiaohongshu.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',

    }
    registerUrl = 'https://captcha.fengkongcloud.com/ca/v1/register'
    RegisterResponse = re_get(registerUrl, headers, params)

    return RegisterResponse.text


traces = {51:
              [[0, 0, 1]
                  , [3, -3, 112]
                  , [40, -11, 203]
                  , [59, -15, 301]
                  , [65, -15, 401]
                  , [65, -15, 501]
                  , [65, -15, 602]
                  , [61, -15, 704]
                  , [54, -14, 803]
                  , [51, -12, 901]
                  , [51, -12, 1002]
                  , [51, -12, 1102]
                  , [51, -12, 1201]
               ],

          53: [
              [0, 0, 0]
              , [11, -2, 100]
              , [27, -5, 201]
              , [38, -7, 301]
              , [45, -7, 413]
              , [45, -7, 508]
              , [47, -7, 602]
              , [50, -8, 705]
              , [52, -8, 811]
              , [53, -9, 912]
          ],

          61: [
              [0, 0, 0]
              , [4, 0, 100]
              , [32, -3, 200]
              , [43, -6, 300]
              , [48, -7, 400]
              , [54, -8, 501]
              , [60, -9, 601]
              , [61, -10, 701]
              , [61, -10, 806]
          ],

          65: [
              [0, -4, 0]
              , [4, -1, 102]
              , [37, -11, 200]
              , [62, -19, 301]
              , [68, -21, 401]
              , [70, -21, 510]
              , [70, -21, 603]
              , [70, -21, 711]
              , [68, -21, 801]
              , [63, -20, 900]
              , [61, -19, 1001]
              , [61, -19, 1114]
              , [61, -19, 1208]
              , [61, -19, 1303]
              , [61, -19, 1413]
              , [62, -19, 1505]
              , [65, -20, 1601]
              , [65, -20, 1708]
              , [65, -20, 1801]
              , [65, -20, 1910]
              , [65, -20, 2003]
              , [65, -20, 2112]
          ],
          68: [
              [0, -1, 0]
              , [5, 0, 101]
              , [25, -6, 200]
              , [41, -9, 301]
              , [60, -10, 404]
              , [65, -10, 508]
              , [65, -10, 601]
              , [65, -10, 711]
              , [67, -10, 801]
              , [68, -10, 901]
              , [68, -10, 1008]
              , [68, -10, 1101]
          ],

          74: [
              [0, 2, 0]
              , [6, -1, 100]
              , [23, -4, 201]
              , [40, -2, 301]
              , [51, 0, 400]
              , [62, 2, 502]
              , [69, 3, 601]
              , [73, 4, 701]
              , [74, 4, 813]
              , [74, 4, 906]
              , [74, 4, 1015]
          ],

          80: [
              [0, 0, 0]
              , [30, -7, 108]
              , [46, -10, 201]
              , [59, -11, 306]
              , [70, -12, 403]
              , [74, -12, 501]
              , [78, -14, 607]
              , [80, -14, 701]
              , [80, -14, 802]
              , [80, -14, 901]
          ],

          88: [
              [0, 0, 0]
              , [2, -1, 100]
              , [37, -1, 201]
              , [58, 2, 301]
              , [75, 2, 401]
              , [79, 2, 501]
              , [82, 2, 611]
              , [82, 1, 705]
              , [87, 1, 818]
              , [88, 0, 903]
              , [88, 0, 1003]
              , [88, 0, 1118]
          ],

          90: [
              [0, 0, 0]
              , [9, 1, 101]
              , [36, -4, 201]
              , [58, -9, 300]
              , [73, -9, 400]
              , [79, -6, 500]
              , [83, -7, 601]
              , [86, -7, 700]
              , [89, -7, 800]
              , [89, -7, 911]
              , [90, -7, 1005]
              , [90, -7, 1115]

          ],

          92: [
              [0, -5, 0]
              , [1, 0, 115]
              , [30, -8, 202]
              , [47, -13, 301]
              , [63, -18, 402]
              , [76, -21, 501]
              , [83, -23, 602]
              , [85, -23, 708]
              , [87, -24, 800]
              , [88, -25, 901]
              , [90, -26, 1001]
              , [92, -26, 1100]
              , [92, -26, 1203]
              , [92, -26, 1312]
          ],

          96: [
              [0, 3, 0]
              , [4, 0, 102]
              , [24, -7, 202]
              , [46, -13, 304]
              , [53, -14, 402]
              , [66, -16, 501]
              , [75, -16, 601]
              , [83, -15, 702]
              , [88, -13, 802]
              , [91, -12, 901]
              , [93, -11, 1001]
              , [96, -10, 1101]
              , [96, -10, 1209]
              , [96, -10, 1302]
          ],

          99: [
              [0, 0, 0]
              , [0, 0, 114]
              , [13, -4, 203]
              , [32, -8, 302]
              , [78, -9, 401]
              , [92, -12, 501]
              , [101, -12, 601]
              , [102, -12, 701]
              , [102, -12, 802]
              , [102, -12, 908]
              , [101, -12, 1001]
              , [99, -12, 1102]
              , [99, -12, 1202]
              , [99, -12, 1311]

          ],

          103: [
              [0, 0, 1]
              , [12, 1, 101]
              , [37, -3, 202]
              , [53, -5, 301]
              , [63, -5, 401]
              , [76, -8, 502]
              , [85, -8, 602]
              , [91, -7, 702]
              , [96, -7, 802]
              , [100, -7, 902]
              , [102, -6, 1012]
              , [102, -6, 1107]
              , [103, -6, 1203]
              , [103, -6, 1309]
              , [103, -6, 1402]
          ],

          106: [
              [0, -2, 0]
              , [8, 2, 103]
              , [42, -6, 201]
              , [71, -8, 302]
              , [83, -8, 401]
              , [90, -8, 501]
              , [94, -8, 601]
              , [98, -8, 701]
              , [101, -9, 804]
              , [105, -9, 901]
              , [106, -9, 1002]
              , [106, -9, 1116]
          ],

          115: [
              [0, 0, 1]
              , [3, 1, 104]
              , [20, -2, 204]
              , [40, -5, 301]
              , [55, -8, 402]
              , [80, -8, 502]
              , [94, -7, 602]
              , [108, -6, 702]
              , [112, -6, 802]
              , [114, -5, 902]
              , [114, -5, 1002]
              , [115, -4, 1102]
              , [115, -4, 1203]
              , [115, -4, 1302]
              , [115, -4, 1401]
              , [115, -4, 1502]
              , [115, -4, 1602]
              , [115, -4, 1702]
          ],

          126: [
              [0, 0, 1]
              , [8, -3, 101]
              , [31, -10, 201]
              , [53, -14, 301]
              , [77, -14, 401]
              , [98, -14, 502]
              , [107, -16, 602]
              , [117, -14, 702]
              , [119, -14, 801]
              , [122, -14, 902]
              , [122, -14, 1003]
              , [122, -14, 1113]
              , [122, -14, 1207]
              , [124, -14, 1301]
              , [126, -14, 1401]
              , [126, -14, 1501]
              , [126, -14, 1610]
          ],

          127: [
              [0, 0, 0]
              , [8, 0, 100]
              , [38, -9, 201]
              , [64, -12, 300]
              , [87, -12, 401]
              , [99, -13, 501]
              , [110, -16, 601]
              , [120, -19, 702]
              , [124, -19, 802]
              , [127, -19, 901]
              , [127, -19, 1001]
              , [127, -19, 1110]
              , [127, -19, 1203]
          ],

          132: [
              [0, -6, 0]
              , [1, 0, 101]
              , [40, 0, 202]
              , [62, -4, 300]
              , [87, -8, 400]
              , [110, -9, 500]
              , [124, -7, 603]
              , [126, -6, 704]
              , [127, -6, 800]
              , [131, -6, 900]
              , [132, -6, 1002]
              , [132, -6, 1111]
              , [132, -6, 1205]
          ],

          140: [
              [0, 1, 0]
              , [1, 0, 101]
              , [29, -11, 201]
              , [58, -11, 301]
              , [90, -13, 401]
              , [107, -13, 502]
              , [115, -13, 601]
              , [123, -14, 701]
              , [128, -14, 801]
              , [132, -14, 901]
              , [135, -16, 1001]
              , [137, -16, 1101]
              , [139, -16, 1201]
              , [140, -15, 1301]
              , [140, -15, 1403]

          ],
          134: [
              [0, 0, 0]
              , [11, -1, 101]
              , [43, 1, 200]
              , [69, 7, 300]
              , [99, 13, 400]
              , [116, 15, 501]
              , [126, 18, 600]
              , [129, 19, 700]
              , [129, 19, 806]
              , [129, 19, 915]
              , [129, 19, 1009]
              , [133, 19, 1102]
              , [134, 19, 1204]
              , [134, 19, 1306]

          ],

          148: [
              [0, 0, 0]
              , [15, -2, 101]
              , [58, -14, 201]
              , [83, -13, 301]
              , [106, -4, 401]
              , [118, -2, 501]
              , [122, -2, 601]
              , [134, -2, 701]
              , [135, -2, 801]
              , [139, -2, 901]
              , [142, -3, 1001]
              , [145, -3, 1101]
              , [146, -4, 1205]
              , [148, -5, 1301]
              , [148, -5, 1408]
              , [148, -5, 1504]
          ],
          153: [
              [0, 1, 0]
              , [36, -7, 101]
              , [67, -12, 201]
              , [102, -17, 302]
              , [117, -17, 401]
              , [130, -18, 502]
              , [140, -20, 601]
              , [143, -20, 701]
              , [147, -21, 810]
              , [149, -21, 904]
              , [149, -21, 1013]
              , [149, -21, 1106]
              , [149, -21, 1215]
              , [151, -21, 1308]
              , [153, -22, 1401]
              , [153, -22, 1513]
              , [153, -22, 1607]
          ],

          154: [
              [0, 0, 0]
              , [17, -6, 101]
              , [58, -8, 201]
              , [93, -14, 300]
              , [125, -12, 401]
              , [137, -12, 505]
              , [145, -12, 601]
              , [150, -12, 701]
              , [152, -12, 800]
              , [154, -12, 901]
              , [154, -12, 1003]
              , [154, -12, 1112]
              , [154, -12, 1206]

          ],

          163: [
              [0, 0, 0]
              , [17, 0, 102]
              , [58, -3, 201]
              , [90, -3, 302]
              , [105, -3, 401]
              , [125, 1, 501]
              , [141, 5, 602]
              , [151, 7, 702]
              , [154, 8, 801]
              , [159, 8, 902]
              , [162, 8, 1001]
              , [163, 8, 1101]
          ],

          166: [
              [0, 0, 0]
              , [7, 0, 102]
              , [75, -12, 201]
              , [111, -14, 301]
              , [122, -18, 402]
              , [131, -21, 501]
              , [142, -21, 601]
              , [148, -21, 701]
              , [153, -21, 801]
              , [158, -22, 902]
              , [159, -22, 1001]
              , [162, -23, 1107]
              , [164, -24, 1201]
              , [165, -24, 1301]
              , [166, -24, 1404]
              , [166, -24, 1514]
              , [166, -24, 1606]

          ],
          174: [
              [0, 0, 0]
              , [6, -2, 102]
              , [20, -8, 202]
              , [60, -18, 300]
              , [79, -19, 401]
              , [105, -19, 500]
              , [133, -22, 601]
              , [159, -22, 700]
              , [170, -22, 801]
              , [174, -22, 901]
              , [174, -22, 1010]
              , [174, -22, 1104]
              , [174, -22, 1214]
              , [174, -22, 1307]

          ],

          178: [
              [0, 0, 0]
              , [0, 0, 110]
              , [17, 0, 203]
              , [72, 6, 304]
              , [110, 13, 401]
              , [134, 7, 505]
              , [153, 5, 611]
              , [162, 5, 701]
              , [166, 5, 800]
              , [168, 5, 902]
              , [170, 4, 1000]
              , [172, 4, 1102]
              , [174, 4, 1214]
              , [175, 4, 1301]
              , [177, 4, 1414]
              , [178, 4, 1516]
              , [178, 4, 1609]
          ],
          186: [
              [0, 0, 0]
              , [4, 1, 102]
              , [27, -2, 201]
              , [44, -5, 300]
              , [101, -14, 401]
              , [134, -14, 501]
              , [156, -17, 602]
              , [171, -20, 702]
              , [174, -21, 801]
              , [176, -22, 901]
              , [179, -23, 1001]
              , [181, -23, 1102]
              , [182, -23, 1203]
              , [185, -24, 1315]
              , [186, -25, 1400]
              , [186, -25, 1514]

          ],
          188: [
              [0, 0, 0]
              , [7, 0, 100]
              , [95, -1, 202]
              , [129, -4, 301]
              , [156, -12, 401]
              , [173, -16, 502]
              , [178, -18, 602]
              , [180, -18, 701]
              , [182, -18, 802]
              , [185, -18, 902]
              , [186, -18, 1001]
              , [186, -18, 1115]
              , [188, -18, 1200]
              , [188, -18, 1301]

          ],

          191: [
              [0, 0, 1]
              , [0, 0, 101]
              , [39, -9, 202]
              , [95, -23, 301]
              , [130, -27, 402]
              , [153, -31, 501]
              , [162, -33, 602]
              , [171, -37, 701]
              , [176, -37, 801]
              , [179, -37, 901]
              , [182, -37, 1001]
              , [183, -38, 1101]
              , [187, -39, 1202]
              , [189, -40, 1310]
              , [191, -40, 1402]
              , [191, -41, 1509]
              , [191, -41, 1604]
              , [191, -41, 1703]

          ],

          189: [
              [0, 0, 0]
              , [22, -4, 100]
              , [67, -19, 202]
              , [110, -23, 301]
              , [146, -17, 401]
              , [153, -15, 501]
              , [162, -14, 602]
              , [172, -15, 701]
              , [176, -15, 801]
              , [179, -15, 901]
              , [183, -15, 1000]
              , [188, -15, 1100]
              , [189, -15, 1201]
              , [189, -15, 1306]
              , [189, -15, 1415]
          ],

          200: [
              [0, 0, 0]
              , [0, 1, 101]
              , [100, 1, 202]
              , [123, 1, 300]
              , [153, -4, 401]
              , [185, -8, 501]
              , [193, -8, 610]
              , [197, -8, 700]
              , [200, -8, 800]
              , [200, -8, 903]
              , [200, -8, 1012]
              , [200, -8, 1107]
          ],

          203: [
              [0, -2, 0]
              , [9, 0, 101]
              , [49, 2, 201]
              , [102, 2, 303]
              , [137, 4, 401]
              , [175, 3, 501]
              , [185, -1, 601]
              , [190, -2, 702]
              , [192, -3, 801]
              , [194, -3, 907]
              , [194, -3, 1003]
              , [197, -3, 1101]
              , [199, -3, 1200]
              , [202, -2, 1300]
              , [203, -2, 1406]
              , [203, -2, 1515]
              , [203, -2, 1609]
          ],
          211: [
              [0, 0, 0]
              , [3, 0, 101]
              , [51, -9, 204]
              , [98, -17, 301]
              , [127, -17, 407]
              , [157, -17, 504]
              , [171, -17, 605]
              , [185, -19, 701]
              , [191, -20, 801]
              , [198, -24, 902]
              , [199, -24, 1013]
              , [202, -25, 1101]
              , [205, -26, 1201]
              , [205, -26, 1309]
              , [205, -26, 1404]
              , [205, -26, 1512]
              , [209, -26, 1605]
              , [211, -26, 1702]
              , [211, -26, 1810]

          ],

          213: [
              [0, 0, 0]
              , [17, 0, 100]
              , [55, -2, 202]
              , [79, -2, 301]
              , [101, -1, 401]
              , [145, -1, 501]
              , [171, 4, 601]
              , [183, 6, 702]
              , [196, 8, 801]
              , [204, 8, 901]
              , [205, 8, 1015]
              , [209, 9, 1101]
              , [210, 9, 1201]
              , [211, 9, 1311]
              , [212, 10, 1401]
              , [213, 10, 1514]
              , [213, 10, 1608]

          ],

          221: [
              [0, 0, 0]
              , [2, 0, 101]
              , [28, -3, 200]
              , [89, -17, 301]
              , [128, -28, 400]
              , [146, -28, 500]
              , [163, -29, 601]
              , [192, -36, 700]
              , [202, -37, 801]
              , [205, -39, 904]
              , [212, -41, 1001]
              , [213, -41, 1109]
              , [215, -42, 1210]
              , [219, -43, 1301]
              , [220, -43, 1410]
              , [221, -44, 1507]
          ],

          222: [
              [0, 0, 0]
              , [2, 0, 103]
              , [10, -1, 201]
              , [41, -5, 305]
              , [123, -15, 400]
              , [162, -19, 500]
              , [184, -23, 600]
              , [197, -27, 701]
              , [203, -28, 801]
              , [207, -29, 901]
              , [211, -29, 1000]
              , [216, -29, 1101]
              , [219, -28, 1201]
              , [221, -28, 1307]
              , [222, -27, 1401]
              , [222, -27, 1512]
              , [222, -27, 1615]

          ],

          226: [
              [0, 0, 0]
              , [10, -4, 100]
              , [51, -10, 201]
              , [108, -14, 301]
              , [130, -20, 401]
              , [149, -27, 500]
              , [166, -31, 601]
              , [182, -33, 703]
              , [193, -33, 801]
              , [202, -31, 904]
              , [207, -30, 1001]
              , [212, -28, 1100]
              , [214, -28, 1217]
              , [216, -28, 1301]
              , [218, -28, 1400]
              , [220, -28, 1501]
              , [222, -28, 1603]
              , [224, -28, 1700]
              , [226, -28, 1804]
              , [226, -28, 1903]
              , [226, -28, 2004]

          ],
          }

modelTraceX = [51, 53, 61, 65, 68, 74, 80, 88, 90, 92, 96, 99, 103, 106,
               115, 126, 127, 132, 140, 134, 148, 153, 154, 163, 166,
               174, 178, 186, 188, 191, 189, 200, 203, 211, 213, 221,
               222, 226]


def GetnearX(distX):
    length = len(modelTraceX)
    nearX = 90
    for i in range(length):

        if i <= length - 2 and modelTraceX[i] <= distX and distX < modelTraceX[i + 1]:
            nearX = modelTraceX[i]
            break
        if i >= length - 1:
            nearX = modelTraceX[-1]
            break

        if distX <= modelTraceX[0]:
            nearX = modelTraceX[0]
            break

    return nearX


def CreatTrace(distX):
    # 获取离其最近的distX的距离

    distX = round(distX * 0.516)

    distX = round(distX)

    nearX = GetnearX(distX)

    # 获取标准轨迹
    trace = traces[nearX]
    # print('标准的长度{}，测出的长度{}'.format(nearX, distX))

    # 计算比例
    rate = distX / nearX

    # 根据比例求取制造轨迹
    # trace = [[0,0,0],[0,0,100],[8.421051025390625,-2.10528564453125,200],[21.052627563476562,-7.368438720703125,301],[42.105262756347656,-10.526336669921875,401],[62.105262756347656,-10.526336669921875,501],[93.68421936035156,-8.42108154296875,601],[106.3157958984375,-8.42108154296875,701],[135.7894744873047,-9.47369384765625,801],[151.57894897460938,-9.47369384765625,901],[160,-9.47369384765625,1001],[169.47369384765625,-9.47369384765625,1101],[184.2105255126953,-13.684234619140625,1200],[190.5263214111328,-15.78948974609375,1302],[196.8421173095703,-16.842132568359375,1402],[200.00001525878906,-18.9473876953125,1500],[202.1052703857422,-18.9473876953125,1609],[202.1052703857422,-18.9473876953125,1702],[202.1052703857422,-18.9473876953125,1810],[202.1052703857422,-18.9473876953125,1904],[202.1052703857422,-18.9473876953125,2012]]

    newTrace = [[xyt[0] * rate, xyt[1], xyt[2]] for xyt in trace]

    # print(newTrace)
    return distX, newTrace


def get_xy(bg_content: bytes, ct_content: bytes):
    bg_img = cv2.imdecode(np.frombuffer(bg_content, np.uint8),
                          cv2.IMREAD_COLOR)  # 如果是PIL.images就换读取方式
    tp_img = cv2.imdecode(np.frombuffer(ct_content, np.uint8),
                          cv2.IMREAD_COLOR)
    bg_edge = cv2.Canny(bg_img, 100, 200)
    tp_edge = cv2.Canny(tp_img, 100, 200)
    bg_pic = cv2.cvtColor(bg_edge, cv2.COLOR_GRAY2RGB)
    tp_pic = cv2.cvtColor(tp_edge, cv2.COLOR_GRAY2RGB)
    res = cv2.matchTemplate(bg_pic, tp_pic, cv2.TM_CCOEFF_NORMED)
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
    # th, tw = tp_pic.shape[:2]
    # print('缺口所在的位置，x是--->{},y是--->{}'.format(max_loc[:2][0],max_loc[:2][1]))
    return max_loc[:2]


def GetData(bg_content, ct_content):
    distX, distY = get_xy(bg_content, ct_content)

    distX, newTrace = CreatTrace(distX)
    return newTrace[-1][0], newTrace


def parseText(registerTex):
    start = re.search('{"code', registerTex).span()[0]
    end = re.search('"}}', registerTex).span()[1]
    register = json.loads(registerTex[start:end])['detail']

    bgUrl = register['bg']
    fgUrl = register['fg']
    return register, bgUrl, fgUrl


# ---------------------------------------------------------


def downPhoto(bgUrl, fgUrl):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36'
    }
    bgUrl = 'https://castatic.fengkongcloud.com' + bgUrl
    fgUrl = 'https://castatic.fengkongcloud.com' + fgUrl
    bgRespone = re_get(bgUrl, headers)
    bgContent = bgRespone.content
    fgResponse = re_get(fgUrl, headers)
    fgConten = fgResponse.content
    # with open(
    # 	r'C:\Users\newrank\Desktop\Python\xhs\photo\bg.jpg',
    # 	'wb') as fp:
    # 	fp.write(bgContent)
    # with open(
    # 	r'C:\Users\newrank\Desktop\Python\xhs\photo\cut.png',
    # 	'wb') as fp:
    # 	fp.write(fgConten)

    return bgContent, fgConten


def getTrace(bgContent, fgConten):
    startTime = round(time.time() * 1000)
    mouseEndX, mouseData = GetData(bgContent, fgConten)
    endTime = startTime + 7 + mouseData[-1][-1]
    # print(mouseEndX, mouseData[-1][0], startTime, endTime)
    trace = {
        "selectData": [

        ],
        "trueWidth": 310.40000000000003,
        "trueHeight": 155.20000000000002,
        "blockWidth": 46.5,
        "endTime": endTime,
        "mouseEndX": mouseEndX,
        "mouseData": mouseData,
        "startTime": startTime

    }
    return trace


def desEncrypt(data, key):
    """des加密"""
    des_obj = des(key.encode(), mode=ECB)
    content = zeroPad(str(data).replace(" ", "").encode())
    return base64.b64encode(des_obj.encrypt(content)).decode("utf-8")


def zeroPad(data):
    """
    zeroPadding
    """
    block_size = 8
    while len(data) % block_size:
        data += b"\0"
    return data


def mainEncrypt(jsText, register, trace, protocol, rversion):
    print(trace)
    exit()
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
        'organization': "eR46sBuqF0fdw7KWFLYa",
        'ostype': "web",
        'protocol': protocol,
        'rid': register["rid"],
        'rversion': rversion,
        'sdkver': "1.1.3",
        "act.os": "web_pc",
    }

    keys = list(params.keys())
    result[keys[0]] = desEncrypt(trace["mouseData"], params[keys[0]])
    result[keys[1]] = desEncrypt(trace["endTime"] - trace["startTime"], params[keys[1]])
    result[keys[2]] = desEncrypt(trace["trueWidth"], params[keys[2]])
    result[keys[3]] = desEncrypt(trace["trueHeight"], params[keys[3]])
    result[keys[4]] = desEncrypt(trace["mouseEndX"] / trace["trueWidth"], params[keys[4]])
    result[keys[5]] = desEncrypt(1, params[keys[5]])
    result[keys[6]] = desEncrypt(0, params[keys[6]])
    result[keys[7]] = desEncrypt(-1, params[keys[7]])
    result[keys[8]] = desEncrypt("default", params[keys[8]])
    result[keys[9]] = desEncrypt("web", params[keys[9]])
    result[keys[10]] = desEncrypt("zh-cn", params[keys[10]])
    result["callback"] = "sm_" + str(round(time.time() * 1000) + 1000)
    return result


def requestVerify(params):
    headers = {
        # 'Host': 'captcha.fengkongcloud.cn',
        'Connection': 'keep-alive',
        'Sec-Fetch-Mode': 'no-cors',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,'
                      ' like Gecko) Chrome/94.0.4606.81 Safari/537.36',
        'Accept': '*/*',
        # 'X-Requested-With': 'com.baidu.searchbox',
        'Sec-Fetch-Site': 'cross-site',
        'Referer': 'https://www.xiaohongshu.com',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',

    }

    verifyUrl = 'http://captcha.fengkongcloud.com/ca/v2/fverify?'
    url = verifyUrl + parse.urlencode(params)
    response = re_get(url, headers)

    if "PASS" in response.text:
        print("xhs 验证成功", response.text, params)
        return 1
    else:
        print("xhs 验证失败", response.text, params)
        return 0


def mainStream():
    configText = requestConfig()
    start, jsUrl = parseConfigText(configText)
    protocol, rversion = getProtocol(jsUrl)
    jsText = requestCapatureJs(jsUrl)
    registerTex = requestRegister()
    register, bgUrl, fgUrl = parseText(registerTex)
    bgContent, fgConten = downPhoto(bgUrl, fgUrl)
    trace = getTrace(bgContent, fgConten)
    params = mainEncrypt(jsText, register, trace, protocol, rversion)

    del jsText
    del bgContent
    del fgConten
    gc.collect()

    code = requestVerify(params)

    return code, register["rid"]


def get_xsign(url):
    screen_key = "WSUDD"
    _st = url.split(".com")[-1] + screen_key
    import hashlib
    m = hashlib.md5()
    m.update(_st.encode(encoding='UTF-8'))
    md5String = m.hexdigest()
    return "X" + md5String


def reply_xhs(rid, timestamp2):
    url = "https://www.xiaohongshu.com/fe_api/burdock/v2/shield/captcha?c=pp"
    data = {
        "rid": rid,
        "callFrom": "web",
        "status": 1
    }
    x_sign = get_xsign(url)
    headers = {
        'cookie': timestamp2,
        'X-Sign': x_sign,
        'Referer': 'https://www.xiaohongshu.com/website-login/captcha?redirectPath=http://www.xiaohongshu.com/'
                   'discovery/item/615d2dd80000000021034b04',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/94.0.4606.81 Safari/537.36',
        'sec-fetch-site': 'same-origin',
        'origin': 'www.xiaohongshu.com',

    }
    while True:
        try:
            response = r.post(url, headers=headers, json=data, timeout=10)
            break
        except:
            print(traceback.format_exc())
            time.sleep(2)
            continue

    response = json.loads(response.text)
    if response['data']['passed']:
        print("解封成功")
        return True
    else:
        print("解封失败")
        return False


code, rid = mainStream()
reply_xhs(rid, "202204249a5650dd48685fb2e9f5b470")
