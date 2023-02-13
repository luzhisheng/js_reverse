from Crypto.Cipher import ARC4
import base64


def encrypt(data, key1):  # 加密
    key = bytes(key1, encoding='utf-8')
    enc = ARC4.new(key)
    res = enc.encrypt(data.encode('utf-8'))
    res = base64.b64encode(res)
    res = str(res, 'utf-8')
    return res


def decrypt(data, key1):  # 解密
    data = base64.b64decode(data)
    key = bytes(key1, encoding='utf-8')
    enc = ARC4.new(key)
    res = enc.decrypt(data)
    res = str(res, 'gbk')
    return res


if __name__ == "__main__":
    data = 'yVRgZ6DVKwYwaqb3CsPFrqsanQvDUS/6MqHLTaztbqc+8nVQ26ZIwrEYViYNyLc7I7WTIkZgJGEUq0mtMVXnDajHnestfk' \
           'Z7WoYTXFYbCVa8vghXgbj0EZzp6q7gKDf9Rd9HaxZxapX5GqqRf62dwiHxL3YRJ5LbIB/xSfO1GoEZR55TQHeEff3PwH4M0i' \
           'p8aC8rX3K2PFOvCqpcj495OavfnlgT2otxLcqKHOnZyC1/cKvLpFjADDTbasbon42aCqcm116+2sNktwfo29ncTz7jawIZc4' \
           'MR9DfYdA8aI/aZl5MbbKhLKHo='  # 需要加密的内容
    key = '12345678812345678912345678912345'  # 加密key
    print('解密后:')
    print(decrypt(data, key))  # 解密方法
