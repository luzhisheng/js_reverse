import numpy as np
from 机器学习深度学习.支持中文 import init_plot
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_moons

SHOW_PLOT = init_plot()

# ===== 生成月牙形数据 =====
np.random.seed(42)
X, y = make_moons(n_samples=200, noise=0.15)  # 月牙形

# ===== 多项式特征（degree=3 更容易拟合弯曲） =====
poly = PolynomialFeatures(degree=3)
X_poly = poly.fit_transform(X)

# ===== 训练逻辑回归 =====
clf = LogisticRegression()
clf.fit(X_poly, y)

# ===== 画决策边界 =====
xx, yy = np.meshgrid(np.linspace(X[:, 0].min() - 0.5, X[:, 0].max() + 0.5, 400),
                     np.linspace(X[:, 1].min() - 0.5, X[:, 1].max() + 0.5, 400))
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
plt.title("逻辑回归 + 多项式特征（月牙形曲线分类）")
plt.legend()
plt.grid(True)
plt.axis('equal')

if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("logistic_moon.png", dpi=300, bbox_inches='tight')
    print("📷 已保存图片 logistic_moon.png")
