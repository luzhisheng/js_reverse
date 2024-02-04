from Crypto.Cipher import AES
import base64
import json

# 如果text不足16位的倍数就用空格补足为16位
def add_to_16(text):
    if len(text.encode('utf-8')) % 16:
        add = 16 - (len(text.encode('utf-8')) % 16)
    else:
        add = 0
    text = text + ('\0' * add)
    return text.encode('utf-8')
 

 # 加密
def encrypt(text):
    key = '9999999999999999'.encode('utf-8')
    mode = AES.MODE_CBC
    iv = b'qqqqqqqqqqqqqqqq'
    text = add_to_16(text)
    cryptos = AES.new(key, mode, iv)
    cipher_text = cryptos.encrypt(text)
    return base64.b64encode(cipher_text)
 
 
 # 解密后，去掉补足的空格用strip() 去掉
def decrypt():
    
    key = 'u9J7A4LkUTQSdak='.encode('utf8')
    print(key)
    text = base64.b64decode('QJrIAL7j4+5jAmY3y1J/ebTwcqBVFBTad5mDggFkMXfu33sn5TEaMKD6FRJE9MYVmm3x9oBa9DY5OlqjYnopK5KkQEpGZFvyr9dw1GCXLdA=')
    iv = b"6di50aH901duea7d"
    mode = AES.MODE_CBC
    cryptos = AES.new(key, mode, iv)
    
    plain_text = cryptos.decrypt(text)
    #print(plain_text)
    print(plain_text.decode('unicode_escape'))
    
decrypt()
    