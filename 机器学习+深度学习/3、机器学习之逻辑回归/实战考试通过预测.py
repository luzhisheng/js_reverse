import matplotlib.pyplot as plt
from 支持中文 import init_plot
import pandas as pd


SHOW_PLOT = init_plot()
data = pd.read_csv('../数据集/examdata.csv')
fig1 = plt.figure()

plt.scatter(data.loc[:, 'Exam1'], data.loc[:, 'Exam2'], label="样本点")
plt.xlabel("分数 1")
plt.ylabel("分数 2")
plt.title("逻辑回归")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("output.png")
