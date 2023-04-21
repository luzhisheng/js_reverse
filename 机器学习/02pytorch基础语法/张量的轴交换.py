import torch

list_9 = [[402, 754, 327, 979],
          [713, 926, 879, 934],
          [540, 953, 209, 369]]
t9 = torch.tensor(list_9)

# 轴交换，列变行，行变成列
print(t9.size())
# 1和0代表维度顺序
t9 = t9.permute(1, 0)
print(t9)
print(t9.size())

# 原维度是(2, 3, 4)，改变下标顺序(1, 0, 2)，变成了([3, 2, 4])
t10 = torch.randint(low=100, high=1000, size=(2, 3, 4))
print(t10.permute(1, 0, 2).size())
