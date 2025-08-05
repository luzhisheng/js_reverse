from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import PolynomialFeatures
from 支持中文 import init_plot
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

SHOW_PLOT = init_plot()

# 1. 读取数据
data = pd.read_csv('../数据集/examdata.csv')
X = data.drop(['Pass'], axis=1)
y = data['Pass']

# 2. 二阶多项式特征
poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

# 3. 创建并训练逻辑回归模型
model = LogisticRegression(max_iter=5000)  # 迭代次数多一点，防止不收敛
model.fit(X_poly, y)

# 4. 预测 & 准确率
y_predict = model.predict(X_poly)
accuracy = accuracy_score(y, y_predict)

# 5. 绘制散点
passed = data[y == 1]
failed = data[y == 0]
plt.scatter(passed['Exam1'], passed['Exam2'], color='blue', label='通过')
plt.scatter(failed['Exam1'], failed['Exam2'], color='red', label='未通过')

# 6. 生成网格点并转换为多项式特征
x1_min, x1_max = X['Exam1'].min() - 5, X['Exam1'].max() + 5
x2_min, x2_max = X['Exam2'].min() - 5, X['Exam2'].max() + 5
xx1, xx2 = np.meshgrid(
    np.linspace(x1_min, x1_max, 300),
    np.linspace(x2_min, x2_max, 300)
)
grid_points = np.c_[xx1.ravel(), xx2.ravel()]
grid_points_df = pd.DataFrame(grid_points, columns=['Exam1', 'Exam2'])
grid_points_poly = poly.transform(grid_points_df)

# 7. 预测网格点类别（用概率画 0.5 边界）
probs = model.predict_proba(grid_points_poly)[:, 1]
probs = probs.reshape(xx1.shape)
plt.contour(xx1, xx2, probs, levels=[0.5], linewidths=2, colors='green')

# 8. 图形设置
plt.xlabel("分数 1")
plt.ylabel("分数 2")
plt.title(f"二阶多项式逻辑回归（准确率: {accuracy:.2f}）")
plt.legend()
plt.grid(True)
plt.axis('equal')

# 9. 显示或保存
if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_poly2.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 logistic_poly2.png")
