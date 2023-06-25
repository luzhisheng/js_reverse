from PIL import Image
import numpy as np
import ddddocr
import cv2


# 将部分像素值变为纯白色, r1, g1, b1 对应的rgb值
def turn_white(img, r1, g1, b1):
    for i in range(img.size[0]):
        for j in range(img.size[1]):
            r, g, b = img.getpixel((i, j))
            if r == r1 and g == g1 and b == b1:
                img.putpixel((i, j), (255, 255, 255))


def noise_image(img_file):
    """选出rgp颜色最多2个，进行降噪处理"""
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


def interference(img_file):
    """移除干扰线条"""
    img = Image.open(img_file)
    # 读取图片高，宽
    height, width = img.height, img.width
    # 首先创建一个空列表,用来存放出现在间隔当中的像素点
    line_list = []
    # 两个for循环,遍历9000次
    for x in range(width):
        for y in range(height):
            r, g, b = img.getpixel((x, y))
            if 0 < y < 10 or 96 < y < 105 or 199 < y < 209 or 292 < y < 299:
                line_list.append([r, g, b])
            if 0 < x < 20 or 109 < x < 120 or 209 < x < 220:
                line_list.append([r, g, b])

    arr = np.array(line_list)
    line_list = np.array(list(set([tuple(t) for t in arr])))
    # 处理像素 RGB 值
    for line in line_list:
        r = line[0]
        g = line[1]
        b = line[2]
        if not (r == 255 and g == 255 and b == 255):
            turn_white(img, r, g, b)
    return img


def binary(img_file, standard=205):
    """灰度转换"""
    img = Image.open(img_file)
    img = img.convert('L')
    pixels = img.load()
    for x in range(img.width):
        for y in range(img.height):
            if pixels[x, y] > standard:
                pixels[x, y] = 255
            else:
                pixels[x, y] = 0
    return img


def enhance(img_file):
    """增强字体显示效果"""
    img = cv2.imread(img_file, 0)
    kernel = np.ones((2, 3), 'uint8')
    img = cv2.erode(img, kernel, iterations=2)
    return img


def ocr(img_file):
    ocr = ddddocr.DdddOcr()
    with open(img_file, 'rb') as f:
        image = f.read()
    res = ocr.classification(image)
    return res


def run():
    image_a = noise_image('./img/1.png')
    image_a.save('./img/1-test.png')
    image_b = interference('./img/1-test.png')
    image_b.save('./img/2-test.png')
    image_c = binary('./img/2-test.png')
    image_c.save('./img/3-test.png')
    image_d = enhance('./img/3-test.png')
    cv2.imwrite('./img/4-test.png', image_d)
    res = ocr('./img/4-test.png')
    print(res)


if __name__ == '__main__':
    run()
