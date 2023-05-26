import torch


list_2 = [
    [127, 128, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
]
t2 = torch.tensor(list_2)  # [-128 - 127]
print(t2.int())
print(t2.double())
print(t2.double().dtype)
