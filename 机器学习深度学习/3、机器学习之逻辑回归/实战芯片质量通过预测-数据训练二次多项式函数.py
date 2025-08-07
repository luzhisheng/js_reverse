from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import PolynomialFeatures
from 机器学习深度学习.支持中文 import init_plot
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

SHOW_PLOT = init_plot()

# 1. 读取数据
data = pd.read_csv('../数据集/chip_test.csv')
X = data.drop(['pass'], axis=1)
y = data['pass']

# 2. 二阶多项式特征
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

# 3. 创建并训练逻辑回归模型
model = LogisticRegression(max_iter=1000)
model.fit(X_poly, y)

# 4. 预测 & 准确率
y_predict = model.predict(X_poly)
accuracy = accuracy_score(y, y_predict)

# 5. 绘制散点
passed = data[y == 1]
failed = data[y == 0]
plt.scatter(passed['test1'], passed['test2'], color='blue', label='通过')
plt.scatter(failed['test1'], failed['test2'], color='red', label='未通过')

# 6. 生成网格点并转换为多项式特征
x1_min, x1_max = X['test1'].min(), X['test1'].max()
x2_min, x2_max = X['test2'].min(), X['test2'].max()
xx1, xx2 = np.meshgrid(
    np.linspace(x1_min, x1_max, 300),
    np.linspace(x2_min, x2_max, 300)
)
grid_points = np.c_[xx1.ravel(), xx2.ravel()]
grid_points_df = pd.DataFrame(grid_points, columns=['test1', 'test2'])
grid_points_poly = poly.transform(grid_points_df)

# 7. 预测网格点类别（用概率画 0.5 边界）
probs = model.predict_proba(grid_points_poly)[:, 1]
probs = probs.reshape(xx1.shape)
plt.contour(xx1, xx2, probs, levels=[0.5], linewidths=2, colors='green')

# 8. 图形设置
plt.xlabel("test1")
plt.ylabel("test2")
plt.title(f"实战芯片质量通过预测-数据训练二次多项式函数（准确率: {accuracy:.2f}）")
plt.legend()
plt.grid(True)
plt.axis('equal')

# 9. 显示或保存
if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_poly2.png", dpi=300, bbox_inches='tight')
    print("已保存图片 logistic_poly2.png")
