import torch

list_2 = [
    [127, 128, 129, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
]
t2 = torch.tensor(list_2, dtype=torch.int8)  # [-128 - 127]
print(t2)
