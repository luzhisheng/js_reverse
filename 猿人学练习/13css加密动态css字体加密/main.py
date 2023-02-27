from fontTools.ttLib import TTFont
import requests


def font_value(key):
    font = TTFont('./docs/aiding.woff')
    font.saveXML('./docs/movie.xml')
    font_dict = {}
    i = 1
    for font_u_nie in font['post'].extraNames[:-1]:
        font_dict[font_u_nie] = i
        i += 1
    font_dict[font['post'].extraNames[-1]] = 0
    return font_dict[key]


def get_ttf(woff):
    import base64
    ttf_name = 'aiding'
    with open('./docs/aiding.ttf', 'wb') as f:
        f.write(base64.b64decode(woff))
    with open('./docs/aiding.woff', 'wb') as f:
        f.write(base64.b64decode(woff))
    return ttf_name


def challenge13(page):
    url = "https://www.python-spider.com/api/challenge13"
    payload = f"page={page}"
    session = requests.session()
    headers = {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    session.headers = headers
    response = session.request("POST", url, data=payload)
    return response.json()


def run():
    data_num = 0
    for page in range(1, 101):
        response_json = challenge13(page)
        data_list = response_json.get('data')
        woff = response_json.get('woff')
        get_ttf(woff)
        for data in data_list:
            data_value_list = data.get('value').split(' ')[:-1]
            data_num_join = ''
            for data_value in data_value_list:
                data_value_num = font_value(data_value.replace('&#x', 'uni'))
                data_num_join += str(data_value_num)
            data_num += int(data_num_join)
        print(data_num)


if __name__ == '__main__':
    run()
