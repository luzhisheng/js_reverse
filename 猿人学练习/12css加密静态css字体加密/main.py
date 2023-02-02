import json
import requests
from fontTools.ttLib import TTFont


def font_value(key):
    font = TTFont('aiding.woff')
    font.saveXML('movie.xml')
    font_dict = {}
    i = 1
    for font_u_nie in font.getGlyphOrder()[1:]:
        font_dict[font_u_nie] = i
        i += 1
    font_dict['unif712'] = 0
    return font_dict[key]


def challenge12(page):
    url = "https://www.python-spider.com/api/challenge12"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    print(response.text)
    return response.text


def run():
    data_num = 0
    for page in range(1, 101):
        response_text = challenge12(page)
        response_text = json.loads(response_text)
        data_list = response_text.get('data')
        for data in data_list:
            data_value_list = data.get('value').split(' ')[:-1]
            data_num_join = ''
            for data_value in data_value_list:
                data_value_num = font_value(data_value.replace('&#x', 'uni'))
                data_num_join += str(data_value_num)
            data_num += int(data_num_join)
        print(data_num)
    print(data_num)


if __name__ == '__main__':
    run()
