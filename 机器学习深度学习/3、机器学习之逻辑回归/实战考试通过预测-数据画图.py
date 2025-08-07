import matplotlib.pyplot as plt
from 机器学习深度学习.支持中文 import init_plot
import pandas as pd


SHOW_PLOT = init_plot()
data = pd.read_csv('../数据集/examdata.csv')
fig1 = plt.figure()

# 按是否通过分两类
passed = data[data['Pass'] == 1]
failed = data[data['Pass'] == 0]

# 绘制两类散点
plt.scatter(passed['Exam1'], passed['Exam2'], color='blue', label="通过")
plt.scatter(failed['Exam1'], failed['Exam2'], color='red', label="未通过")

# 坐标轴 & 标题
plt.xlabel("分数 1")
plt.ylabel("分数 2")
plt.title("逻辑回归之分类任务")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("output.png")
