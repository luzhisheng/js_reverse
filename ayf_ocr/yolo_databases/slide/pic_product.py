# -*- coding:utf-8 -*-
from PIL import Image, ImageDraw, ImageFont
import random
import os
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.font_manager import FontProperties
import matplotlib.image as imgplt
import time
import cv2


def convert(size, box):
    dw = 1. / (size[0])
    dh = 1. / (size[1])
    x = (box[0] + box[1]) / 2.0 - 1
    y = (box[2] + box[3]) / 2.0 - 1
    w = box[1] - box[0]
    h = box[3] - box[2]
    x = x * dw
    w = w * dw
    y = y * dh
    h = h * dh
    return x, y, w, h


def addText(img, path, pic_size, size=50, style='train'):
    if style not in ['train', 'val']:
        raise EnvironmentError('style 模式不识别，只支持 train 和 val')

    with open('./Annotations/labels/{}/{}'.format(style, path.split('/')[-1].replace('jpg', 'txt')), 'w') as label_text:
        print(pic_size[1] / 5)
        point = (random.randint(15, pic_size[0] - 50),
                 random.randint(15, pic_size[0] - 50))
        # 计算 xbox坐标并且归一化
        xmin = point[0]
        ymin = point[1]
        xmax = point[0] + 50
        ymax = point[1] + 50
        b = (float(xmin), float(xmax), float(ymin), float(ymax))
        b1, b2, b3, b4 = b
        w = pic_size[1]
        h = pic_size[0]
        if b2 > w:
            b2 = w
        if b4 > h:
            b4 = h
        b = (b1, b2, b3, b4)

        bb = convert((w, h), b)

        write_message = '0' + " " + " ".join([str(a) for a in bb]) + '\n'
        label_text.write(write_message)
    # 创建映射文件 train.txt / val.txt
    with open('./Annotations/{}.txt'.format(style), 'a') as mapping:
        # 获取绝对路径。为了好看 把 \ 处理成 /
        ab_path = os.path.dirname(os.path.abspath(__file__)).replace('\\', '/')
        mapping.write(ab_path + '/{}'.format(path[2:]) + '\n')

    im = Image.open("2.png")
    im = im.resize((50, 50), Image.ANTIALIAS)
    r, g, b, a = im.split()
    img.paste(im, point, mask=a)
    img = img.convert('RGB')
    img.save(path)
    return path


# 第一步。对目录环境进行检查，是否满足处理要求
def make_dirs(dirs):
    try:
        os.makedirs(dirs)
    except FileExistsError:
        print(dirs + ' 目录存在，自动跳过')


make_dirs('Annotations/images/train')
make_dirs('Annotations/images/val')
make_dirs('Annotations/labels/train')
make_dirs('Annotations/labels/val')

number = input('输入要生成的数量')
style = input('输入模式：train/val')
for i in range(int(number)):
    print('正在生成{}，第{}/{}张'.format(style, i + 1, number))
    img = Image.open("drag/{}".format(random.choice(os.listdir('drag'))))
    path = addText(img,
                   path='./Annotations/images/{}/{}.jpg'.format(style, str(time.time()).replace('.', '')),
                   pic_size=(img.size[0], img.size[1]),
                   size=24,
                   style=style
                   )
