# 知识点：请求存在规律，存在先后顺序

## 解题思路

![请求](./img/1.png)

在点击下一页的时候，控制台会先请求 https://www.python-spider.com/cityjson 地址，再请求目标地址https://www.python-spider.com/api/challenge7
这样才能正确的返回数据