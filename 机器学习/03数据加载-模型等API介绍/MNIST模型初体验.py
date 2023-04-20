from torchvision.datasets import MNIST
import matplotlib.pyplot as plt

mnist_train = MNIST(root="./MNIST_data", train=True, download=True, transform=None)

# 第一次运行会下载数据集
print(mnist_train)

# 数据集总量
print(len(mnist_train))

# 数据集元祖，（图片，标注）
print(mnist_train[5000])
image = mnist_train[5000][0]

# 打印图片
plt.imshow(image)
plt.show()

# 获取标注值
print(mnist_train[5000][1])
