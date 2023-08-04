from datetime import datetime
from phone import Phone
import pandas as pd
import os


class ReadPhone(object):

    def __init__(self):
        self.xlsx_keys_list = []

    @staticmethod
    def read_xlsx(file_path):
        print(file_path)
        df = pd.read_excel(file_path, header=None)
        return df.values.tolist()

    @staticmethod
    def export_excel(export, excel_path):
        """
        将字典列表转换为DataFrame
        :param export:
        :return:
        """
        pf = pd.DataFrame(list(export))
        current_time = datetime.now()
        formatted_time = current_time.strftime('%Y-%m-%d-%H-%M-%S')
        print(f'{excel_path}/{formatted_time}.xlsx')
        file_path = pd.ExcelWriter(f'{excel_path}/{formatted_time}.xlsx')
        # 替换空单元格
        pf.fillna(' ', inplace=True)
        # 输出
        pf = pf.sort_values(by='手机号码')
        pf.to_excel(file_path, index=False)
        # 保存表格
        file_path.close()

    @staticmethod
    def get_phone_text(phone_str):
        phone_str = phone_str.replace(' ', '').replace('。', '').strip()
        p = Phone()
        try:
            phone_text = p.find(int(phone_str))
            if phone_text and (phone_text is not None):
                xlsx_keys = {
                    "手机号码": int(phone_str),
                    "省": phone_text.get('province') or '',
                    "城市": phone_text.get('city') or '',
                    "邮编": phone_text.get('zip_code') or '',
                    "区域区号": phone_text.get('area_code') or '',
                    "运营商": phone_text.get('phone_type') or ''
                }
            else:
                xlsx_keys = {
                    "手机号码": int(phone_str),
                    "省": '',
                    "城市": '',
                    "邮编": '',
                    "区域区号": '',
                    "运营商": ''
                }
            return xlsx_keys
        except Exception as e:
            print(phone_str)
            print(e)
            pass

    def run(self, folder_path, excel_path):
        # 递归地查找所有子文件夹中的 xlsx 文件
        xlsx_files = []
        for root, dirs, files in os.walk(folder_path):
            for file in files:
                if file.endswith(".xlsx"):
                    xlsx_files.append(os.path.join(root, file))

        # 打印所有找到的 xlsx 文件路径
        for file in xlsx_files:
            phone_list = self.read_xlsx(file)
            for phone_str in phone_list:
                xlsx_keys = self.get_phone_text(str(phone_str[0]))
                if xlsx_keys:
                    self.xlsx_keys_list.append(xlsx_keys)
        self.export_excel(self.xlsx_keys_list, excel_path)


if __name__ == '__main__':
    read_phone = ReadPhone()
    read_phone.run('./file', './docs')
