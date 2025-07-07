import fitz
import os
from collections import Counter

pdf_path = "_compressed.pdf"
doc = fitz.open(pdf_path)

total_image_size = 0
image_count = 0
xobject_count = 0
unique_fonts = set()
font_counter = Counter()

print(f"📄 文件名: {pdf_path}")
print(f"📄 总页数: {len(doc)}\n")

for page_num, page in enumerate(doc, start=1):
    print(f"--- 第 {page_num} 页 ---")

    # 获取图片信息
    images = page.get_images(full=True)
    print(f"  图片数量: {len(images)}")
    for img in images:
        xref = img[0]
        img_info = doc.extract_image(xref)
        size = len(img_info["image"])
        print(f"    图片 xref={xref}, 大小: {size / 1024:.2f} KB")
        total_image_size += size
        image_count += 1

    # 获取字体信息
    fonts = page.get_fonts()
    print(f"  字体数量: {len(fonts)}")
    for font in fonts:
        fontname = font[3]
        font_counter[fontname] += 1
        unique_fonts.add(fontname)

    # 获取 XObject 数量
    xobject_count += len(page.get_xobjects())

# === 汇总输出 ===
print("\n===== 分析总结 =====")
print(f"总图片数: {image_count}")
print(f"图片总大小: {total_image_size / 1024:.2f} KB")
print(f"独立字体种类数: {len(unique_fonts)}")
print(f"XObject（嵌入对象）数量: {xobject_count}")
print(f"原始文件大小: {os.path.getsize(pdf_path) / 1024:.2f} KB")
print("\n===== 嵌入字体 Top 10 使用统计： =====")
for font_name, count in font_counter.most_common(10):
    print(f"{font_name:40} 使用次数: {count}")
