from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader
from torch import nn
from tqdm import tqdm
import torch
import numpy as np
import os


class MnistModel(nn.Module):
    def __init__(self):
        super(MnistModel, self).__init__()
        self.fc1 = nn.Linear(1 * 28 * 28, 100)  # 最终为什么是 10，因为手写数字识别最终是 10分类的，分类任务中有多少，就分几类。 0-9
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(100, 10)

    def forward(self, image):
        image_viwed = image.view(-1, 1 * 28 * 28)  # 此处需要拍平
        out_1 = self.fc1(image_viwed)
        fc1 = self.relu(out_1)
        out_2 = self.fc2(fc1)
        return out_2


def test_success():
    # 实例化模型
    total_loss = []
    model = MnistModel()
    if os.path.exists("./models/model.pkl"):
        model.load_state_dict(torch.load("./models/model.pkl"))
    loss_function = nn.CrossEntropyLoss()
    my_transforms = transforms.Compose(
        [
            transforms.ToTensor(),
            transforms.Normalize(mean=(0.1307,), std=(0.3081,))
        ]
    )
    mnist_train = MNIST(root="../MNIST_data", train=False, download=True, transform=my_transforms)
    dataloader = DataLoader(mnist_train, batch_size=8, shuffle=True)
    dataloader = tqdm(dataloader, total=len(dataloader))

    succeed = []

    model.eval()
    with torch.no_grad():
        for images, labels in dataloader:
            # 获取结果
            output = model(images)
            result = output.max(dim=1).indices
            # print(labels)
            # print(result)
            succeed.append(result.eq(labels).float().mean().item())
            # 通过结果计算损失
            loss = loss_function(output, labels)
            total_loss.append(loss.item())
    print(np.mean(total_loss))
    return np.mean(succeed)
