from sklearn.cluster import KMeans
import pandas as pd

# 读取数据
data = pd.read_csv('../数据集/data.csv')

# 选取特征列作为 X（假设你的数据有 'feature1', 'feature2' 两个特征）
X = data[['V1', 'V2']]

# 建立 KMeans 模型并训练
KM = KMeans(n_clusters=3, random_state=0, n_init='auto')
KM.fit(X)

print("聚类标签：", KM.labels_)
print("聚类中心：\n", KM.cluster_centers_)
