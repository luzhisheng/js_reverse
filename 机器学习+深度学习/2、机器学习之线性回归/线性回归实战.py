from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import make_regression

# 生成样本数据
x, y = make_regression(n_samples=100, n_features=1, noise=10, random_state=42)

# 划分训练和测试集（可选）
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)

# 建立模型并训练
lr_model = LinearRegression()
lr_model.fit(x_train, y_train)

# 模型预测
y_pred = lr_model.predict(x_test)

# 模型参数输出
print("a系数（斜率）:", lr_model.coef_)
print("b截距（bias）:", lr_model.intercept_)
