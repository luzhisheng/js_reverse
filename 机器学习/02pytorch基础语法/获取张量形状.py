import torch

list_3 = [
    [127, 128, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
]
t3 = torch.tensor(list_3)  # [-128 - 127]
print(t3.shape)
print(t3.size())

