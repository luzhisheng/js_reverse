# 为什么默认对角线是 1？
# 这是因为单位矩阵在数学中定义就是：
# 主对角线为 1，其余为 0，用于矩阵乘法中保持原矩阵不变（恒等作用）。

import numpy as np
a = np.eye(5)
print(a)

b = np.ones([5, 5])
print(b)

c = a + b
print(c)
