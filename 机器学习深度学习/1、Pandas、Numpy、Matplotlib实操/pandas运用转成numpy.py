import pandas as pd
import numpy as np

df = pd.read_excel('1.xlsx')
print(df.columns)

col = df.iloc[:, 1]
filtered = df[col > 1]
print(filtered)

data_array = np.array(df)
print(data_array)

data_new = data_array + 10
print(data_new)

df_new = pd.DataFrame(data_new)
print(df_new)
df_new.to_excel("2.xlsx", index=False, header=False)
