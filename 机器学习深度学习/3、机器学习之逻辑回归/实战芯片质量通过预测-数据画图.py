# 做分类任务第一步确实应该先看 数据分布，这能帮你判断：
# 数据是否线性可分（直线能否分开类别）
# 类别边界是否规则（圆形、椭圆、月牙形等）
# 是否需要做特征变换（比如多项式、核函数）
# 是否存在异常值 / 不平衡数据


import matplotlib.pyplot as plt
from 机器学习深度学习.支持中文 import init_plot
import pandas as pd


SHOW_PLOT = init_plot()
data = pd.read_csv('../数据集/chip_test.csv')
fig1 = plt.figure()

# 按是否通过分两类
passed = data[data['pass'] == 1]
failed = data[data['pass'] == 0]

# 绘制两类散点
plt.scatter(passed['test1'], passed['test2'], color='blue', label="通过")
plt.scatter(failed['test1'], failed['test2'], color='red', label="未通过")

# 坐标轴 & 标题
plt.xlabel("test1")
plt.ylabel("test2")
plt.title("逻辑回归之分类任务")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("output.png")
