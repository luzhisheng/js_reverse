import pandas as pd
import json


class File(object):

    def __init__(self):
        pass

    def write_json(self, filename, data_list):
        with open(f'../docs/{filename}.json', 'w') as f:
            for item in data_list:
                json.dump(item, f)
                f.write("\n")

    def write(self, filename, data_list, columns_list):
        filename = f'../docs/{filename}.csv'
        try:
            frame = pd.DataFrame(
                data_list,
                columns=columns_list
            )
            frame.to_csv(filename)
        except Exception as e:
            raise e
        return True

    def read(self, filename):
        try:
            filename = f'../docs/{filename}.csv'
            frame = pd.read_csv(filename)
        except Exception as e:
            raise e
        return frame
