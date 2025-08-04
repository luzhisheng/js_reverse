import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import os


plt.rcParams['font.sans-serif'] = ['SimHei']
plt.rcParams['axes.unicode_minus'] = False


def has_display():
    """判断是否有图形显示环境"""
    if os.name == "posix":
        return "DISPLAY" in os.environ
    return True


if has_display():
    matplotlib.use("TkAgg")
    SHOW_PLOT = True
else:
    matplotlib.use("Agg")
    SHOW_PLOT = False

# 固定随机种子
np.random.seed(42)

# 类别0：以(1, 1)为中心，方差0.2
x0 = np.random.normal(loc=1.0, scale=0.2, size=(50, 2))
# 类别1：以(3, 3)为中心，方差0.2
x1 = np.random.normal(loc=3.0, scale=0.2, size=(50, 2))

# 合并数据
X = np.vstack((x0, x1))
y = np.array([0] * 50 + [1] * 50)

# 绘制散点图
plt.figure(figsize=(6, 5))
plt.scatter(X[y == 0, 0], X[y == 0, 1], c='blue', label='类别0', edgecolors='k')
plt.scatter(X[y == 1, 0], X[y == 1, 1], c='red', label='类别1', edgecolors='k')

plt.xlabel("特征 1")
plt.ylabel("特征 2")
plt.title("分类散点图（两类分开）")
plt.legend()
plt.grid(True)
plt.show()
