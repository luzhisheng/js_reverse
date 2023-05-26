import torch
import numpy as np

list_1 = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
]
print(list_1)
print(np.array(list_1))

# 张量
print(torch.tensor(list_1))
