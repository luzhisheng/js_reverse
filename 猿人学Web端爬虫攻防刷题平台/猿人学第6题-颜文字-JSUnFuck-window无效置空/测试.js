const JSEncrypt = require('JSEncrypt');

// 公钥
var pubKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDq04c6My441Gj0UFKgrqUhAUg+kQZeUeWSPlAU9fr4HBPDldAeqzx1UR99KJHuQh/zs1HOamE2dgX9z/2oXcJaqoRIA/FXysx+z2YlJkSk8XQLcQ8EBOkp//MZrixam7lCYpNOjadQBb2Ot0U/Ky+jF2p+Ie8gSZ7/u+Wnr5grywIDAQAB`;

// 私钥
var priKey = `MIICXgIBAAKBgQCrbSQz+MLEviJbvj55pcdAKTWGut9ax/4zaKiuRlSgpkF8Z5na
KLlHtMwIeJh4L0Phs0xg6p6LvMqOfnKvMS+6ZMuO2A4Olm7ixDr310yXUP6JzbKw
1ZoLsTW/IkQ/xt7DYVNHQBu/WfOjJ4n2GeN9cFkZZ18wkPLA/rkdhZKoRQIDAQAB
AoGBAJ93nvbt0Rk+Gi4n8mwtSAYqj41upzoG0zS1hjzgVfc/0alNorRrr7fBuw+i
R4t9xHLf3QxHFQe+rtsRS9QnOFJxPgFXdbMAMsJSn7hmxc1bvsOJmlnGcTdusnge
KGJW8E+LLNjaGY8QvUyOIG34/5WRKH1PxnO8FCmzJQYSarBdAkEA2ktyfNIJLPD2
YrHTVdiZequiCw9En4Vq6X67AMpLy1sK1CLb62YX6Jc9O+5YOl1XxVNujo3Aasky
Q28nvcfklwJBAMkJRMrEdAJbqRR14qHAf8kP/sQLqQuAXZx37d5Y0vNlFyXCOtGN
Xe58Ly7RuNnLR30q2leafHIzW/eOVWfHqYMCQQC0n2bs1xHWiM8lnMQkLSPZd7iN
9CUw5UEwULdFER4j9oIAQ5O6tHAl+TYmp7GDIYcldEJvW+URtsaLO6cjhgmjAkEA
jwRgAxw1J4RLybl/q/DFN6WAabmd3gfJEMok17w6/lpZWExQCcnXHBUOf/FE3vQF
fJ8iy5WkmJ2+/GMukPDyvwJAC2yTrIE5VB3ukCLIILMY7NtZfZxsbSMcClNWoPKq
5l6ryPry4iTtsoNgkTfmcYE+K3hazTeWDnRVRjiAex7ujQ==`;

// 创建加密对象实例
var encryptor = new JSEncrypt();
//设置公钥
encryptor.setPublicKey(pubKey);
// 对内容进行加密
var rsaPassWord = encryptor.encrypt("1|1704568922000");
console.log('加密后:', rsaPassWord);

// 解密
//创建解密对象实例
var decrypt = new JSEncrypt();
//设置秘钥
decrypt.setPrivateKey(priKey);
//解密之前拿公钥加密的内容
var uncrypted = decrypt.decrypt(rsaPassWord);
console.log('解密后:', uncrypted);
