import numpy as np
from 机器学习深度学习.支持中文 import init_plot
import matplotlib.pyplot as plt
from sklearn.linear_model import LogisticRegression


SHOW_PLOT = init_plot()

# ===== 生成模拟数据 =====
np.random.seed(42)
n_samples = 100
X = np.random.rand(n_samples, 2) * 2 - 1
y = (X[:, 0] + X[:, 1] > 0).astype(int)

# ===== 训练逻辑回归模型 =====
clf = LogisticRegression()
clf.fit(X, y)

# ===== 绘制决策边界 =====
x_min, x_max = X[:, 0].min() - 0.5, X[:, 0].max() + 0.5
y_min, y_max = X[:, 1].min() - 0.5, X[:, 1].max() + 0.5
xx, yy = np.meshgrid(np.linspace(x_min, x_max, 200),
                     np.linspace(y_min, y_max, 200))

Z = clf.predict(np.c_[xx.ravel(), yy.ravel()])
Z = Z.reshape(xx.shape)

plt.figure(figsize=(6, 5))
plt.contourf(xx, yy, Z, alpha=0.3, cmap=plt.cm.coolwarm)

# ===== 绘制训练数据 =====
colors = ['blue', 'red']
labels_name = ['类别1', '类别2']
for cls, color, label_name in zip([0, 1], colors, labels_name):
    plt.scatter(X[y == cls, 0], X[y == cls, 1],
                c=color, label=label_name, edgecolors='k', alpha=0.7)

plt.xlabel("特征 1")
plt.ylabel("特征 2")
plt.title("逻辑回归二分类及决策边界")
plt.legend()
plt.grid(True)


if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_class.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 logistic_class.png")
