from dispatch.base import Base
import datetime
import json


class 创建巨量百应主播详情爬虫(Base):

    def __init__(self):
        super(创建巨量百应主播详情爬虫, self).__init__()
        self.project_table = 'project_buyin_authorStatData'

    def project(self, tasks: list):
        """
        :param tasks:[{brand_code:, search_keyword:}]
        :return:
        search_keyword: 多组关键词用空格分隔
        """
        list_dict = []
        for task in tasks:
            task_id = task.get("task_id")
            log_id = task.get("log_id")
            uid = task.get("uid")
            payload = f"https://buyin.jinritemai.com/dashboard/servicehall/daren-profile?log_id={log_id}&uid={uid}"
            item = {
                "task_id": task_id,
                "payload_get": payload,
                "payload_post": '',
                'deduplication': f"uid={uid[0:30]}",
                'weight': 1
            }
            list_dict.append(item)
        cnt = self.eb_supports.insert_many(self.project_table, list_dict)
        if cnt >= 0:
            self.log(f"成功插入{self.project_table}任务-{cnt}")


if __name__ == '__main__':
    now = datetime.datetime.now()
    date = now.strftime('%Y_%m_%d_%H_%M_%S')
    task_id = f'project_daduoduo_dy_author_detail-{date}'
    d = 创建巨量百应主播详情爬虫()
    weight = 1
    offset = 0
    while True:
        sql = f"""
            SELECT
                data, deduplication
            FROM
                buyin_authorStatData_seekAuthor 
            LIMIT 1000 OFFSET {offset}
        """
        msg = d.eb_supports.query(sql)
        list_dict = []
        for data, deduplication in msg:
            data = json.loads(data)
            log_id = deduplication.split('&')[0]
            uid = data.get('author_base').get('uid')
            item = {"task_id": task_id, "uid": uid, "log_id": log_id}
            list_dict.append(item)
        if list_dict:
            d.project(list_dict)
        else:
            break
        offset += 1000
