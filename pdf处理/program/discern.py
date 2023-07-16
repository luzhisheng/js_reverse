import pdfplumber


class Discern(object):

    def __init__(self):
        self.xlsx_table = {}

    def pdf_text(self, path_pdf):
        with pdfplumber.open(path_pdf) as pdf:
            # 遍历每个页面
            for page in pdf.pages:
                # 提取页面文本
                text = page.extract_text()
                lines = text.split("\n")
                print(lines)
                for line in lines:
                    # print(line)
                    if '报告编号:' in line:
                        self.xlsx_table['报告编号'] = line.split("报告编号")[1].strip()
                    if '样品名称:' in line:
                        self.xlsx_table['样品名称'] = line.split("样品名称")[1].strip()
                    if '公司' in line and '中检华通' not in line:
                        print(line)
                        self.xlsx_table['公司名称'] = line.strip()
            print(self.xlsx_table)

    def run(self):
        self.pdf_text('../docs/CSTBB23040149+SST2304000301BB+英姿医疗科技(湖南)有限公司+宫腔内窥镜+低温等离子灭菌+耐受性试验（中文）.pdf')


if __name__ == '__main__':
    discern = Discern()
    discern.run()
