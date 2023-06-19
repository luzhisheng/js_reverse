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

    # np.unique()该函数是去除数组中的重复数字，并进行排序之后输出，这里返回的是所有像素rgb值，以及对应的数量
    # colors, counts = np.unique(np.array(im).reshape(-1, 3), axis=0, return_counts=True)
    # ct = np.sort(counts)
    # top2_counts = ct[-2:].tolist()
    # print(np.array(im).reshape(-1, 3))


    return img


def run():
    image_b = processing_image('./img/1.png')
    image_b.save('./img/1-test.png')


if __name__ == '__main__':
    run()