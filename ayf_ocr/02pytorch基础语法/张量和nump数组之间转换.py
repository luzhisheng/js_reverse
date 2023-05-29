import torch

t5 = torch.randint(low=100, high=1000, size=(2, 3, 4))
print(t5.numpy())

t6 = torch.tensor([41, 96, 88, 145], dtype=torch.int32)
print(t6.tolist())
