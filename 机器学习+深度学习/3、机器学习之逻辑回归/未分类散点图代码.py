import os
import matplotlib
import matplotlib.pyplot as plt
import numpy as np


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

np.random.seed(42)
x = np.random.rand(50)
y = np.random.rand(50)

plt.figure(figsize=(6, 5))
plt.scatter(x, y, c='blue', alpha=0.7, edgecolors='k')
plt.xlabel("特征 1")
plt.ylabel("特征 2")
plt.title("未分类散点图")
plt.grid(True)

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("scatter.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 scatter.png")
