from torch import optim
from torch import nn


# 全连接层
class MnistModel(nn.Module):
    def __init__(self):
        super(MnistModel, self).__init__()
        self.fc2 = nn.Linear(1 * 28 * 28, 100)  # 最终为什么是 10，因为手写数字识别最终是 10分类的，分类任务中有多少，就分几类。 0-9
        self.relu = nn.ReLU()

    def forward(self, image):
        image_viwed = image.view(-1, 1 * 28 * 28)  # 此处需要拍平
        out = self.fc2(image_viwed)
        fc1_out = self.relu(out)
        return out


model = MnistModel()
optimizer = optim.Adam(model.parameters(), lr=1e-4)
LOST = nn.CTCLoss()
