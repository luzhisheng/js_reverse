在JS逆向系列课的第9课《一击即中 处理常见代码混淆的方法》中，我们见到了5中看起来很厉害的混淆字符串，也学会了如何轻松干掉它们。 那么现在，请运用你在第9课第4节中学到的知识，尝试做一下这道题吧~

这一页的所有帖子的内容中（不含列表页）一共提到了多少次“夜幕团队”？

第9课的解题思路都差不多

![debugger](../img/106.png)

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
        s = "9f739eb5-3811-48aa-8956-ae841cb2086dMTY3NjcxNjAwMDc=xianyuplus"
        res = sha1_secret_str(s)
        print("预期结果:", "f7cce178719cb0ba3097767e08a78683a8410a39")
        print("实际结果:", res)

