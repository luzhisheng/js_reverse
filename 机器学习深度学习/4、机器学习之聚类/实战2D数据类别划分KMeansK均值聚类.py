from 机器学习深度学习.支持中文 import init_plot
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
import pandas as pd

SHOW_PLOT = init_plot()


# 1. 读取数据
data = pd.read_csv('../数据集/data.csv')
X = data.drop(['labels'], axis=1)
y = data['labels']

KM = KMeans(n_clusters=3, random_state=0)
KM.fit(X)

labels = KM.labels_

# 添加聚类标签到数据中
data['cluster'] = labels

plt.figure(figsize=(8, 6))
for cluster_id in sorted(data['cluster'].unique()):
    cluster_data = data[data['cluster'] == cluster_id]
    plt.scatter(cluster_data['V1'], cluster_data['V2'], label=f"聚类 {cluster_id}")

# 坐标轴 & 标题
plt.xlabel("分数 1")
plt.ylabel("分数 2")
plt.title("KMeans 聚类结果")
plt.legend()
plt.grid(True)
plt.axis('equal')

# 显示或保存图像
if SHOW_PLOT:
    plt.show()
else:
    plt.savefig("kmeans_cluster.png")
