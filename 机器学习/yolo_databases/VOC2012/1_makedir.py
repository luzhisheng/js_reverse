import os


# 第一步。对目录环境进行检查，是否满足处理要求
def file_exists(filename, message):
    if not os.path.exists(filename):
        raise FileExistsError(message)


def make_dirs(dirs):
    try:
        os.makedirs(dirs)
    except FileExistsError:
        print(dirs + ' 目录存在，自动跳过')


# 第二步。创建关键目录
file_exists('Annotations', 'VOC标注，Annotations目录不存在')
file_exists('JPEGImages', 'VOC标注，JPEGImages 图片目录不存在')
make_dirs('images/train')
make_dirs('images/val')
make_dirs('labels/train')
make_dirs('labels/val')
