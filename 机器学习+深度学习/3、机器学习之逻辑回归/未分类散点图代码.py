from 支持中文 import init_plot
import matplotlib.pyplot as plt
import numpy as np


SHOW_PLOT = init_plot()

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
