from torch import save, load
from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader
from torch import nn
from torch import optim
from tqdm import tqdm
import 测试
import os
import numpy as np


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


# 实例化模型
model = MnistModel()
optimizer = optim.Adam(model.parameters())

# 加载已经训练好的模型和优化器继续进行训练
if os.path.exists('./models/model.pkl'):
    model.load_state_dict(load("./models/model.pkl"))
    optimizer.load_state_dict(load("./models/optimizer.pkl"))

loss_function = nn.CrossEntropyLoss()
my_transforms = transforms.Compose(
    [
        transforms.ToTensor(),
        transforms.Normalize(mean=(0.1307,), std=(0.3081,))
    ]
)
mnist_train = MNIST(root="../MNIST_data", train=True, download=True, transform=my_transforms)


def train(epoch):
    total_loss = []
    dataloader = DataLoader(mnist_train, batch_size=8, shuffle=True)
    dataloader = tqdm(dataloader, total=len(dataloader))
    model.train()
    for images, labels in dataloader:
        # 梯度置0
        optimizer.zero_grad()
        # 前向传播
        output = model(images)
        # 通过结果计算损失
        loss = loss_function(output, labels)
        total_loss.append(loss.item())
        # 反向传播
        loss.backward()
        # 优化器更新
        optimizer.step()

    save(model.state_dict(), './models/model.pkl')
    save(optimizer.state_dict(), './models/optimizer.pkl')
    # 打印一下训练成功率
    print('第{}个epoch，成功率, 损失为{}'.format(epoch, np.mean(total_loss)), 测试.test_success())


for i in range(10):
    train(i)
