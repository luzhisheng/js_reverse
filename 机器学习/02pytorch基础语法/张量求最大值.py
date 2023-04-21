import torch

list_7 = [
    [792, 436, 928, 303],
    [809, 170, 778, 652],
    [967, 520, 419, 184]
]
t7 = torch.tensor(list_7)

# 求最大值
print(t7.max())

# 列求最大值
print(t7.max(dim=0))

# 行求最大值
print(t7.max(dim=1))
