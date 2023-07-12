from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader

# 图片标准化处理目的就是提高识别准确度
my_transforms = transforms.Compose(
    [
        transforms.PILToTensor(),
    ]
)

mnist_train = MNIST(root="./MNIST_data", train=True, download=True, transform=my_transforms)

a = DataLoader(mnist_train, batch_size=1, shuffle=True)
for img, labels in a:
    print(img)
    print(labels)
    exit()
