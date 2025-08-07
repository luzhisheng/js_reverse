import torch
import torch.nn as nn
import matplotlib.pyplot as plt
import matplotlib

matplotlib.use("Agg")

# 1. 生成数据 y = 2x + 3 + 噪声
torch.manual_seed(0)
X = torch.unsqueeze(torch.linspace(-5, 5, 100), dim=1)  # shape: [100, 1]
y = 2 * X + 3 + 0.5 * torch.randn(X.size())             # shape: [100, 1]

# 2. 定义模型：线性 y = wx + b
model = nn.Linear(in_features=1, out_features=1)

# 3. 定义损失函数和优化器
criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=0.01)

# 4. 训练模型
num_epochs = 200
for epoch in range(num_epochs):
    # 前向传播
    y_pred = model(X)

    # 计算损失
    loss = criterion(y_pred, y)

    # 反向传播与优化
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    # 每隔20轮打印一次
    if (epoch + 1) % 20 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 5. 输出训练好的参数
w = model.weight.item()
b = model.bias.item()
print(f"Learned model: y = {w:.2f}x + {b:.2f}")

# 6. 可视化结果
plt.scatter(X.numpy(), y.numpy(), label="Original Data")
plt.plot(X.numpy(), y_pred.detach().numpy(), color='red', label="Fitted Line")
plt.legend()
plt.grid(True)
plt.savefig("./plot.png")
