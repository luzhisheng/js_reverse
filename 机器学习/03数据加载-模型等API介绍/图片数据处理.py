from torchvision.datasets import MNIST
from torchvision import transforms
from torch.utils.data import DataLoader


mnist_train = MNIST(root="./MNIST_data", train=True, download=True, transform=transforms.PILToTensor())

a = DataLoader(mnist_train, batch_size=1, shuffle=True)
for i in a:
    print(i)
