import numpy as np
from 支持中文 import init_plot
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_moons
from sklearn.metrics import accuracy_score


SHOW_PLOT = init_plot()

# ===== 生成月牙形数据 =====
np.random.seed(42)
X, y = make_moons(n_samples=200, noise=0.15)  # 月牙形

# ===== 二次多项式特征 =====
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# ===== 训练逻辑回归 =====
clf = LogisticRegression()
clf.fit(X_poly, y)

# ===== 计算训练集准确率 =====
y_pred = clf.predict(X_poly)
acc = accuracy_score(y, y_pred)
print(f"训练集准确率: {acc:.2%}")

# ===== 画决策边界 =====
xx, yy = np.meshgrid(
    np.linspace(X[:, 0].min() - 0.5, X[:, 0].max() + 0.5, 400),
    np.linspace(X[:, 1].min() - 0.5, X[:, 1].max() + 0.5, 400)
)
grid = np.c_[xx.ravel(), yy.ravel()]
grid_poly = poly.transform(grid)
Z = clf.predict(grid_poly).reshape(xx.shape)

plt.figure(figsize=(6, 6))
plt.contourf(xx, yy, Z, cmap=plt.cm.coolwarm, alpha=0.3)

# 原始数据
plt.scatter(X[y == 0, 0], X[y == 0, 1], c='blue', label='类别0', edgecolors='k')
plt.scatter(X[y == 1, 0], X[y == 1, 1], c='red', label='类别1', edgecolors='k')

plt.xlabel("特征 1")
plt.ylabel("特征 2")
plt.title(f"逻辑回归 + 二次曲线（月牙形分类）\n准确率: {acc:.2%}")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_moon_degree2.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 logistic_moon_degree2.png")
