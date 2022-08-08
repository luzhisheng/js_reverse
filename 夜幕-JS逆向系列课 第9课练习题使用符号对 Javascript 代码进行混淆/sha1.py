"""
使用sha1加密算法，返回str加密后的字符串
"""


def sha1_secret_str(s: str):
    import hashlib
    sha = hashlib.sha1(s.encode('utf-8'))
    encrypts = sha.hexdigest()
    return encrypts


if __name__ == '__main__':
    # 待加密的字符串
    s = 'ba9f5e5d-7e71-4298-882c-57cd2ea1b4d8MTY3NjcxNDc5NzY=nightteam'
    res = sha1_secret_str(s)
    print("预期结果:", "00fd56664d646e12758c991bdbaeacb50e3b1321")
    print("实际结果:", res)
