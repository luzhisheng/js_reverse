from base import Base
from urllib.parse import parse_qsl, urlsplit
import json


class BuyinAuthorStatDataMitm(Base):
    def __init__(self):
        super(BuyinAuthorStatDataMitm, self).__init__()
        self.达人广场搜索列表 = 'buyin_authorStatData_seekAuthor'
        self.作者概述V2 = 'buyin_authorStatData_authorOverviewV2'
        self.联系方式 = 'buyin_contact_info'

    def response(self, flow):
        # 达人广场搜索列表
        if "https://buyin.jinritemai.com/api/authorStatData/seekAuthor" in flow.request.url:
            list_dicts = []
            author_list = json.loads(flow.response.content).get('data').get('list')
            event_track_log_id = json.loads(flow.response.content).get('data').get('event_track_log_id')
            for author in author_list:
                item = {
                    "task_id": 'project_test',
                    "data": json.dumps(author),
                    "deduplication": event_track_log_id + f"&uid={author.get('author_base').get('uid')[0:30]}",
                }
                list_dicts.append(item)
            db_res = self.eb_supports.insert_many(self.达人广场搜索列表, list_dicts)
            print(db_res)

        # 作者概述V2
        if "https://buyin.jinritemai.com/api/authorStatData/authorOverviewV2" in flow.request.url:
            uid = dict(parse_qsl(urlsplit(flow.request.url).query)).get('uid')
            list_dicts = []
            data = json.loads(flow.response.content).get('data')
            item = {
                "task_id": 'project_test',
                "data": json.dumps(data),
                "deduplication": f"uid={uid[0:30]}"
            }
            list_dicts.append(item)
            db_res = self.eb_supports.insert_many(self.作者概述V2, list_dicts)
            print(db_res)

        # 联系方式
        if "https://buyin.jinritemai.com/api/contact/contact_info" in flow.request.url:
            uid = dict(parse_qsl(urlsplit(flow.request.url).query)).get('origin_uid')
            list_dicts = []
            data = json.loads(flow.response.content).get('data')
            contact_value = data.get('contact_info').get('contact_value')
            if contact_value:
                item = {
                    "task_id": 'project_test',
                    "data": json.dumps(data),
                    "deduplication": f"uid={uid[0:30]}"
                }
                list_dicts.append(item)
                db_res = self.eb_supports.insert_many(self.联系方式, list_dicts)
                print(db_res)
