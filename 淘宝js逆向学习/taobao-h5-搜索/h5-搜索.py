import requests
import time


class Tao_bao_h5搜索(object):

    def __init__(self):
        self.sign_url = "http://127.0.0.1:3005/get_sign"
        self.toten = "9bccf82b4b7f76fcb7b8f862d73a1a57"

    def get_x_s(self):
        data_time = str(int(time.time() * 1000))
        substance = 'test11111&test22222&12574478&{"appId":"29859","params":"{\\"isBeta\\":\\"false\\",\\"grayHair\\":\\"false\\",\\"appId\\":\\"29859\\",\\"from\\":\\"nt_history\\",\\"brand\\":\\"HUAWEI\\",\\"info\\":\\"wifi\\",\\"index\\":\\"4\\",\\"ttid\\":\\"600000@taobao_android_10.7.0\\",\\"needTabs\\":\\"true\\",\\"rainbow\\":\\"\\",\\"areaCode\\":\\"CN\\",\\"vm\\":\\"nw\\",\\"schemaType\\":\\"auction\\",\\"elderHome\\":\\"false\\",\\"device\\":\\"HMA-AL00\\",\\"isEnterSrpSearch\\":\\"true\\",\\"newSearch\\":\\"false\\",\\"network\\":\\"wifi\\",\\"subtype\\":\\"\\",\\"hasPreposeFilter\\":\\"false\\",\\"client_os\\":\\"Android\\",\\"gpsEnabled\\":\\"false\\",\\"searchDoorFrom\\":\\"srp\\",\\"debug_rerankNewOpenCard\\":\\"false\\",\\"homePageVersion\\":\\"v7\\",\\"searchElderHomeOpen\\":\\"false\\",\\"style\\":\\"wf\\",\\"page\\":1,\\"n\\":\\"10\\",\\"q\\":\\"小佩\\",\\"search_action\\":\\"initiative\\",\\"sugg\\":\\"_4_1\\",\\"m\\":\\"h5\\",\\"sversion\\":\\"13.6\\",\\"prepositionVersion\\":\\"v2\\",\\"tab\\":\\"all\\",\\"channelSrp\\":\\"newh5\\",\\"tagSearchKeyword\\":null,\\"sort\\":\\"_coefp\\",\\"filterTag\\":\\"\\",\\"prop\\":\\"\\"}"}'
        substance = substance.replace("test11111", self.toten)
        substance = substance.replace("test22222", data_time)
        data = {
            'isubstanced': substance
        }
        req = requests.post(self.sign_url, data=data)
        sign = req.text
        return sign, data_time

    def run(self):
        sign, data_time = self.get_x_s()
        url = "https://h5api.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?jsv=2.6.2&" \
              "appKey=12574478&t={}&sign={}&api=mtop.relationrecommend." \
              "WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp2&data=%7B%22appId" \
              "%22%3A%2229859%22%2C%22params%22%3A%22%7B%5C%22isBeta%5C%22%3A%5C%22false%5C%22%2C%5C%22grayHair%" \
              "5C%22%3A%5C%22false%5C%22%2C%5C%22appId%5C%22%3A%5C%2229859%5C%22%2C%5C%22from%5C%22%3A%5C%22" \
              "nt_history%5C%22%2C%5C%22brand%5C%22%3A%5C%22HUAWEI%5C%22%2C%5C%22info%5C%22%3A%5C%22wif" \
              "i%5C%22%2C%5C%22index%5C%22%3A%5C%224%5C%22%2C%5C%22ttid%5C%22%3A%5C%22600000%40taobao_android" \
              "_10.7.0%5C%22%2C%5C%22needTabs%5C%22%3A%5C%22true%5C%22%2C%5C%22rainbow%5C%22%3A%5C%22%5C%2" \
              "2%2C%5C%22areaCode%5C%22%3A%5C%22CN%5C%22%2C%5C%22vm%5C%22%3A%5C%22nw%5C%22%2C%5C%22schemaT" \
              "ype%5C%22%3A%5C%22auction%5C%22%2C%5C%22elderHome%5C%22%3A%5C%22false%5C%22%2C%5C%22device%5" \
              "C%22%3A%5C%22HMA-AL00%5C%22%2C%5C%22isEnterSrpSearch%5C%22%3A%5C%22true%5C%22%2C%5C%22newSearch" \
              "%5C%22%3A%5C%22false%5C%22%2C%5C%22network%5C%22%3A%5C%22wifi%5C%22%2C%5C%22subtype" \
              "%5C%22%3A%5C%22%5C%22%2C%5C%22hasPreposeFilter%5C%22%3A%5C%22false%5C%22%2C%5C%22client_os" \
              "%5C%22%3A%5C%22Android%5C%22%2C%5C%22gpsEnabled%5C%22%3A%5C%22false%5C%22%2C%5C%22searchDoorFrom%" \
              "5C%22%3A%5C%22srp%5C%22%2C%5C%22debug_rerankNewOpenCard%5C%22%3A%5C%22false%5C%22%2C%5C%22" \
              "homePageVersion%5C%22%3A%5C%22v7%5C%22%2C%5C%22searchElderHomeOpen%5C%22%3A%5C%22false" \
              "%5C%22%2C%5C%22style%5C%22%3A%5C%22wf%5C%22%2C%5C%22page%5C%22%3A1%2C%5C%22n%5C%22%3A%5C%221" \
              "0%5C%22%2C%5C%22q%5C%22%3A%5C%22%E5%B0%8F%E4%BD%A9%5C%22%2C%5C%22search_action%5C%22%3A%5C%22" \
              "initiative%5C%22%2C%5C%22sugg%5C%22%3A%5C%22_4_1%5C%22%2C%5C%22m%5C%22%3A%5C%22h5%5C%22%2C%5C%22" \
              "sversion%5C%22%3A%5C%2213.6%5C%22%2C%5C%22prepositionVersion%5C%22%3A%5C%22v2%5C%22%2C%5C%22tab" \
              "%5C%22%3A%5C%22all%5C%22%2C%5C%22channelSrp%5C%22%3A%5C%22newh5%5C%22%2C%5C%22tagSearchKeyword" \
              "%5C%22%3Anull%2C%5C%22sort%5C%22%3A%5C%22_coefp%5C%22%2C%5C%22filterTag%5C%22%3A%5C%22%5C%22%2C%5C%22" \
              "prop%5C%22%3A%5C%22%5C%22%7D%22%7D".format(data_time, sign)

        payload = {}
        headers = {
            'authority': 'h5api.m.taobao.com',
            'accept': '*/*',
            'accept-language': 'zh-CN,zh;q=0.9',
            'cache-control': 'no-cache',
            'cookie': 'cna=ELEkGc4vbAoCAXAAl5MD6aGZ; xlly_s=1; _samesite_flag_=true; cookie2=13a72f3a899150707d77460bb72d326f;'
                      ' t=e3686fc276acd1ac7d4e431450e9945a; _tb_token_=e3334bebbfe14;'
                      ' l=eBM6PPbqLFlAXlhJBOfanurza77tjIRYmuPzaNbMiOCP9pfH5VeAW6qrUUYMCnGVh6ueR3Jfz-p8BeYBqHKKnxv95FeQRPDmn;'
                      ' tfstk=cc8GBbaj9hS6d3IHVV_slKl0ohmRalnNCE8e8fAGypWPIXxN_sjYYuzb2XXtFArf.;'
                      ' _m_h5_tk=9bccf82b4b7f76fcb7b8f862d73a1a57_1650895662706; _m_h5_tk_enc=b7133316268d150a397a165654a00d4e;'
                      ' isg=BHBwr3o65hWgTLkck0oc2OLcQT7CuVQD2vqXxGrBe0ueJRDPEsiGkotUfS1FsQzb;'
                      ' _m_h5_tk=b0f255731963ab6266805e35cff6f132_1650894966554; _m_h5_tk_enc=cc84fb4f5f859e0997edf297753b1627',
            'pragma': 'no-cache',
            'referer': 'https://main.m.taobao.com/',
            'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'script',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'same-site',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 '
                          '(KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'
        }

        response = requests.request("GET", url, headers=headers, data=payload)
        print(response.text)


if __name__ == '__main__':
    a = Tao_bao_h5搜索()
    a.run()
