from urllib.parse import urlparse
from datetime import datetime
import hashlib
import base64


class Baes(object):

    def getYMDHMSstrList(self):
        """返回：[2019,03,01]"""
        td = datetime.now()
        tdTupele = td.timetuple()
        y = str(tdTupele[0])
        m = ("0" + str(tdTupele[1]))[-2:]
        d = ("0" + str(tdTupele[2]))[-2:]
        h = ("0" + str(tdTupele[3]))[-2:]
        M = ("0" + str(tdTupele[4]))[-2:]
        s = ("0" + str(tdTupele[5]))[-2:]
        return [y, m, d, h, M, s]

    def generate_sign(self, url):
        """通过md5生成项目符号表单URL"""
        md5 = hashlib.md5()
        md5.update(self.check_domain_area(str(url)).encode('utf-8'))
        sign = base64.urlsafe_b64encode(md5.digest())
        sign = str(sign, encoding="utf-8").replace('==', '')
        return sign

    def check_domain_area(self, url):
        """确认域名区域.不对域名区域,协议类型,做ｍｄ５加密"""
        try:
            parsed_uri = urlparse(url)
            uri_netloc = parsed_uri.netloc
            uri_netloc_new = '.'.join(parsed_uri.netloc.split('.')[:-1])
            url = url.replace(uri_netloc, uri_netloc_new).replace('https', '').replace('http', '')
        finally:
            return url
