# 目标：采集100页的全部数字，并计算所有数据加和。有时候，并没有加密，但咋就拿不到数据呢？

## 解题思路

![请求](./img/1.png)

再点击下一页的时候，控制台会先请求 https://www.python-spider.com/cityjson 地址，再请求目标地址https://www.python-spider.com/api/challenge7
这样才能正确的返回数据