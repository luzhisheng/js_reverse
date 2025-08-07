import numpy as np
import matplotlib
import matplotlib.pyplot as plt

matplotlib.use("Agg")

# 样本数据
x = np.array([1, 2, 3])
y = np.array([2, 3, 5])

# 初始化参数
w = 0.0
b = 0.0
lr = 0.1
epochs = 50

# 记录历史参数和损失
w_list = []
b_list = []
loss_list = []

# 开始训练
for epoch in range(epochs):
    y_pred = w * x + b
    error = y_pred - y

    # 计算损失 (MSE)
    loss = np.mean(error ** 2) / 2

    # 计算梯度
    dw = np.mean(error * x)
    db = np.mean(error)

    # 梯度更新
    w -= lr * dw
    b -= lr * db

    # 保存历史
    w_list.append(w)
    b_list.append(b)
    loss_list.append(loss)

    print(f"Epoch {epoch+1:02d}: w={w:.4f}, b={b:.4f}, loss={loss:.4f}")

# 训练结束后画出拟合曲线
plt.figure(figsize=(6, 4))
plt.scatter(x, y, color='red', label='Data')
plt.plot(x, w * x + b, label='Fitted Line')
plt.title("Linear Regression Fit")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.savefig("./plot.png")
