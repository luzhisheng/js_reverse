import matplotlib.pyplot as plt
from 机器学习深度学习.支持中文 import init_plot
import pandas as pd

SHOW_PLOT = init_plot()

# 读取数据
data = pd.read_csv('../数据集/data.csv')

# 画图
plt.figure(figsize=(8, 6))
plt.scatter(data['V1'], data['V2'], color='blue', label="样本点")

# 坐标轴 & 标题
plt.xlabel("聚类 1")
plt.ylabel("聚类 2")
plt.title("原始数据分布（V1 vs V2）")
plt.legend()
plt.grid(True)
plt.axis('equal')

# 显示或保存图像
if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("raw_scatter.png")
