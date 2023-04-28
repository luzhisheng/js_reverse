from PIL import Image


def processing_image(img_file, standard=205):
    """ 1.将图片进行降噪处理, 通过二值化去掉后面的背景色并加深文字对比度 """
    img = Image.open(img_file)
    for i in range(img.size[0]):
        for j in range(img.size[1]):
            r, g, b = img.getpixel((i, j))
            # 将部分像素值变为纯白色
            if r == 0 and g == 0 and b == 0:
                img.putpixel((i, j), (255, 255, 255))

    # 灰度转换，二值化: 根据阈值 standard, 将所有像素都置为 0(黑色) 或 255(白色), 便于接下来的分割
    img = img.convert('L')
    pixels = img.load()
    for x in range(img.width):
        for y in range(img.height):
            if pixels[x, y] > standard:
                pixels[x, y] = 255
            else:
                pixels[x, y] = 0
    return img


def run():
    image_b = processing_image('./img/1.png')
    image_b.save('./img/1-test.png')


if __name__ == '__main__':
    run()
