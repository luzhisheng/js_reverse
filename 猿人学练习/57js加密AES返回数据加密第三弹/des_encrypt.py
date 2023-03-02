from Crypto.Cipher import DES

key = b'abcdefgh'  # 密钥 8位或16位,必须为bytes


def pad(text):
    # 如果text不是8的倍数【加密文本text必须为8的倍数！】，补足为8的倍数
    while len(text) % 8 != 0:
        text += ' '
    return text


# 加密方法
def encrypt(key, text):
    des = DES.new(key, DES.MODE_ECB)  # 创建DES实例
    padded_text = pad(text)
    encrypted_text = des.encrypt(padded_text.encode('utf-8'))
    return encrypted_text


# 解密方法
def decrypt(key, text):
    des = DES.new(key, DES.MODE_ECB)
    plain_text = des.decrypt(text).decode().rstrip(' ')
