import os
import fitz

dimlimit = 0  # 100  # 每个图像边缘的最小像素数限制
relsize = 0  # 0.05  # 图像：图像尺寸比必须大于此值（5%）
abssize = 0  # 2048  # 图像绝对大小限制 2 KB：如果小于此值，则忽略


def recoverpix(doc, item):
    '''
    恢复像素
    :param doc:
    :param item:
    :return:
    '''
    xref = item[0]  # PDF 图像的 xref
    smask = item[1]  # 其 /SMask 的 xref

    # 特殊情况：存在 /SMask 或 /Mask
    if smask > 0:
        pix0 = fitz.Pixmap(doc.extract_image(xref)["image"])
        if pix0.alpha:  # 捕获异常情况
            pix0 = fitz.Pixmap(pix0, 0)  # 删除 alpha 通道
        mask = fitz.Pixmap(doc.extract_image(smask)["image"])

        try:
            pix = fitz.Pixmap(pix0, mask)
        except:  # 如果有问题，回退到原始基本图像
            pix = fitz.Pixmap(doc.extract_image(xref)["image"])

        if pix0.n > 3:
            ext = "pam"
        else:
            ext = "png"

        return {  # 创建预期的字典
            "ext": ext,
            "colorspace": pix.colorspace.n,
            "image": pix.tobytes(ext),
        }

    # 特殊情况：存在 /ColorSpace 定义
    # 为确保安全，我们将这些情况转换为 RGB PNG 图像
    if "/ColorSpace" in doc.xref_object(xref, compressed=True):
        pix = fitz.Pixmap(doc, xref)
        pix = fitz.Pixmap(fitz.csRGB, pix)
        return {  # 创建预期的字典
            "ext": "png",
            "colorspace": 3,
            "image": pix.tobytes("png"),
        }
    return doc.extract_image(xref)


def read_pdf(pdf_path, output_folder):
    doc = fitz.open(pdf_path)
    page_count = doc.page_count
    xreflist = []
    imglist = []
    for pno in range(page_count):
        il = doc.get_page_images(pno)
        imglist.extend([x[0] for x in il])
        for img in il:
            xref = img[0]
            if xref in xreflist:
                continue
            width = img[2]
            height = img[3]
            if min(width, height) <= dimlimit:
                continue
            image = recoverpix(doc, img)
            n = image["colorspace"]
            imgdata = image["image"]

            if len(imgdata) <= abssize:
                continue
            if len(imgdata) / (width * height * n) <= relsize:
                continue

            imgfile = os.path.join(output_folder, "img%05i.%s" % (xref, image["ext"]))
            fout = open(imgfile, "wb")
            fout.write(imgdata)
            fout.close()
            xreflist.append(xref)


if __name__ == '__main__':
    read_pdf('../1.pdf', '../target_img')
