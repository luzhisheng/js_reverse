# 提取pdf文件中图片和文字

## pdfimages提取图片

pdfimages 是 Poppler 工具包的一部分，可以用于从 PDF 文件中提取图像。要使用 pdfimages，您需要安装 Poppler 工具包。

1.在 Ubuntu 或 Debian 上安装 Poppler 工具包：
```shell
sudo apt-get update
sudo apt-get install poppler-utils
```

2.提取所有图像并保存为 PNG 格式：
```shell
pdfimages -png ./file_test/1.pdf ./target_img/output_image
```

## pdfplumber提取文字
```shell
with pdfplumber.open(pdf_path) as pdf:
    page = pdf.pages[0]
    # 提取页面文本
    text = page.extract_text()
```