import cv2
import numpy as np


# 找图 返回最近似的点
def search_returnPoint(img, template, template_size):
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    template_ = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
    result = cv2.matchTemplate(img_gray, template_, cv2.TM_CCOEFF_NORMED)
    threshold = 0.7
    # res大于70%
    loc = np.where(result >= threshold)
    # 使用灰度图像中的坐标对原始RGB图像进行标记
    point = ()
    for pt in zip(*loc[::-1]):
        cv2.rectangle(img, pt, (pt[0] + template_size[1], pt[1] + + template_size[0]), (7, 249, 151), 2)
        point = pt
    if point == ():
        return None, None, None
    return img, point[0] + template_size[1] / 2, point[1]


def run(target_image_path, image_path):
    scale = 1
    img = cv2.imread(target_image_path)  # 要找的大图
    img = cv2.resize(img, (0, 0), fx=scale, fy=scale)
    template = cv2.imread(image_path)  # 图中的小图
    template = cv2.resize(template, (0, 0), fx=scale, fy=scale)
    template_size = template.shape[:2]
    img, x_, y_ = search_returnPoint(img, template, template_size)
    if img is None:
        return False
    else:
        print(f"找到图片位置:{x_, y_}")
        return True


if __name__ == '__main__':
    run('../target_img/image_6.jpg', '../img/cma.jpg')
