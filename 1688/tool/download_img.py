from urllib.parse import urlparse
import settings
import requests
import os


def request_download(image_url, path):
    url_path = urlparse(image_url).path
    image_name = url_path.split("/")[-1]
    r = requests.get(image_url)
    with open(f'{settings.excel_path}{path}/{image_name}', 'wb') as f:
        f.write(r.content)


def mkdir(path):
    folder = os.path.exists(f"{settings.excel_path}{path}")
    if not folder:
        os.makedirs(f"{settings.excel_path}{path}")


def download_img(image_url, path):
    mkdir(path)
    request_download(image_url, path)


if __name__ == '__main__':
    image_url = "https://cbu01.alicdn.com/img/ibank/O1CN01daaXsL1dVskYx7T92_!!3193983742-0-cib.jpg"
    name = "test"
    download_img(image_url, name)
