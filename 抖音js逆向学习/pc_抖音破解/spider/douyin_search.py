from urllib.parse import quote
from http import cookies
import http.client


conn = http.client.HTTPSConnection("www.douyin.com")


def get_ac_nonce(encoded_text):
    url = f"/search/{encoded_text}?aid=86c17213-316d-4ad1-b9bf-8c63f8a0dc97&source=normal_search&type=user"
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
    conn.request("GET", url=url, headers=headers)
    response = conn.getresponse()
    cookie_dict = get_cookie_dict(response)
    __ac_nonce = cookie_dict.get('__ac_nonce')
    print(__ac_nonce)
    conn.close()
    return __ac_nonce


def get_ttwid(__ac_nonce, encoded_text):
    url = f"/search/{encoded_text}?aid=86c17213-316d-4ad1-b9bg-8c63f8a0dc97&source=normal_search&type=user"
    headers = {
        'authority': 'www.douyin.com',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'cookie': f'__ac_nonce={__ac_nonce}; __ac_signature=_02B4Z6wo00f01NL-f2wAAIDD41Tb6n.CT9zS3nvAAFB8o7NPqbdJFO6mVl3LwjlgF2Zf0a0wDXQVZvs6UGw15ktDgIh0el3P62aPH.Zs9.DmleOkSYHoGUyabP9zOejTMfCrsSvHICfQUYw69b;',
        'pragma': 'no-cache',
        'referer': f'https://www.douyin.com/search/{encoded_text}?aid=86c17213-316d-4ad1-b9bf-8c63f8a0dc97&source=normal_search&type=user',
        'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    }
    conn.request("GET", url=url, headers=headers)
    response = conn.getresponse()
    print(response.read().decode())
    try:
        cookie_dict = get_cookie_dict(response)
        ttwid = cookie_dict.get('ttwid')
        print(ttwid)
        conn.close()
        return ttwid
    except AttributeError as e:
        print(f"报错{e}")


def get_cookie_dict(response):
    cookie_str = response.getheader("Set-Cookie")
    cookie = cookies.SimpleCookie()
    cookie.load(cookie_str)
    # 将 Cookie 对象转换成字典形式
    cookie_dict = {}
    for key, morsel in cookie.items():
        cookie_dict[key] = morsel.value
    return cookie_dict


if __name__ == '__main__':
    search_keyword = '半斤塘口'
    encoded_text = quote(search_keyword)
    __ac_nonce = get_ac_nonce(encoded_text)
    get_ttwid(__ac_nonce, encoded_text)
