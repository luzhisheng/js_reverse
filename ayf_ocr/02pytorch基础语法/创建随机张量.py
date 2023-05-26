import torch

# 在100~1000中随机整数
t4 = torch.randint(low=100, high=1000, size=(2, 3, 4))
print(t4)
