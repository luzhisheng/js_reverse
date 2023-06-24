from PIL import Image
import numpy as np
import cv2


# 将部分像素值变为纯白色, r1, g1, b1 对应的rgb值
def turn_white(img, r1, g1, b1):
    for i in range(img.size[0]):
        for j in range(img.size[1]):
            r, g, b = img.getpixel((i, j))
            if r == r1 and g == g1 and b == b1:
                img.putpixel((i, j), (255, 255, 255))


def processing_image(img_file, standard=205):
    """ 1.将图片进行降噪处理, 通过二值化去掉后面的背景色并加深文字对比度 """
    img = Image.open(img_file)
    # colors所有像素rgb值，counts对应的数量
    colors, counts = np.unique(np.array(img).reshape(-1, 3), axis=0, return_counts=True)
    # 排序
    ct = np.sort(counts)
    # 找到出现最多的2种颜色的个数
    top2_counts = ct[-2:].tolist()
    # 找到出现最多的2种颜色的下标
    subscript_list = []
    for k, v in list(enumerate(counts, start=0)):
        if v in top2_counts:
            subscript_list.append(k)
    # 找到出现最多的2种颜色的rgb值
    for subscript in subscript_list:
        color = colors[subscript]
        # 去除颜色
        turn_white(img, color[0], color[1], color[2])

    return img


def run():
    image_b = processing_image('./img/1.png')
    image_b.save('./img/1-test.png')


if __name__ == '__main__':
    run()
