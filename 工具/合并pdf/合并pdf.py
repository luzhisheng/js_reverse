import os
from PyPDF2 import PdfMerger

target_path = 'docs'
pdf_lst = [f for f in os.listdir(target_path) if f.endswith('.pdf')]
print(pdf_lst)
pdf_lst = [os.path.join(target_path, filename) for filename in pdf_lst]

file_merger = PdfMerger()
for pdf in pdf_lst:
    file_merger.append(pdf)     # 合并pdf文件

file_merger.write("docs/终稿-艾映锋-电商数据采集与数据分析-论文.pdf")
