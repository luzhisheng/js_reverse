from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from 机器学习深度学习.支持中文 import init_plot
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

SHOW_PLOT = init_plot()

# 1. 读取数据
data = pd.read_csv('../数据集/examdata.csv')
x = data.drop(['Pass'], axis=1)
y = data['Pass']
x1 = data['Exam1']
x2 = data['Exam2']

# 2. 创建并训练逻辑回归模型
model = LogisticRegression()
model.fit(x, y)

# 3. 预测
y_predict = model.predict(x)

# 4. 准确率
accuracy = accuracy_score(y, y_predict)

# 5. 绘制散点图
passed = data[y == 1]
failed = data[y == 0]

plt.scatter(passed['Exam1'], passed['Exam2'], color='blue', label='通过')
plt.scatter(failed['Exam1'], failed['Exam2'], color='red', label='未通过')

# 6. 绘制逻辑回归分类边界
x1_min, x1_max = x1.min() - 5, x1.max() + 5
x2_min, x2_max = x2.min() - 5, x2.max() + 5

# 生成网格点
xx1, xx2 = np.meshgrid(
    np.linspace(x1_min, x1_max, 200),
    np.linspace(x2_min, x2_max, 200)
)

# 预测每个网格点的类别
grid_points = np.c_[xx1.ravel(), xx2.ravel()]
grid_points_df = pd.DataFrame(grid_points, columns=['Exam1', 'Exam2'])
Z = model.predict(grid_points_df)
Z = Z.reshape(xx1.shape)

# 画等高线（分类边界）
plt.contour(xx1, xx2, Z, levels=[0.5], linewidths=2, colors='green')

# 7. 图形设置
plt.xlabel("分数 1")
plt.ylabel("分数 2")
plt.title(f"逻辑回归分类任务（准确率: {accuracy:.2f}）")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_moon.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 logistic_moon.png")

