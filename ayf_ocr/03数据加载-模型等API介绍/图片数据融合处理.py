from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader
from torchvision.utils import make_grid
import matplotlib.pyplot as plt

# 图片标准化处理目的就是提高识别准确度，比如灰度，旋转，等等
my_transforms = transforms.Compose(
    [
        transforms.PILToTensor(),
    ]
)

mnist_train = MNIST(root="./MNIST_data", train=True, download=True, transform=my_transforms)

a = DataLoader(mnist_train, batch_size=2, shuffle=True)
for img, labels in a:
    print(labels)
    image = make_grid(img).permute(1, 2, 0).numpy()
    plt.imshow(image)
    plt.show()
    exit()
