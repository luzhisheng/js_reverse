import time
from tqdm import tqdm


c = tqdm(range(0, 1000), total=1000)
for i in c:
    time.sleep(0.1)
