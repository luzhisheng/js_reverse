from base import Base
import json


class CleanBuyinAuthorStatDataAuthorOverviewV2(Base):
    name = 'buyin_authorStatData_authorOverviewV2'

    def __init__(self):
        super(CleanBuyinAuthorStatDataAuthorOverviewV2, self).__init__()
        self.table = self.name
        self.clean_table = "clean_" + self.table

    def process_item(self, resp):
        list_res = []
        if not resp:
            self.log(f'清洗{self.table}数据-不存在')
            return ''

        for task_id, data, deduplication, update_time in resp:
            live_data = json.loads(data).get('live_data')
            video_data = json.loads(data).get('video_data')
            item = {
                "task_id": task_id,
                "uid": deduplication.replace("uid=", ""),
                "live_data_percentage": live_data.get('percentage'),
                "live_data_count": live_data.get('count'),
                "live_data_watching_num": live_data.get('watching_num'),
                "live_data_sale_low": live_data.get('sale_low'),
                "live_data_sale_high": live_data.get('sale_high'),
                "live_data_sale_value": live_data.get('sale_value'),
                "live_data_GPM_low": live_data.get('GPM_low'),
                "live_data_GPM_high": live_data.get('GPM_high'),
                "live_data_GPM_value": live_data.get('GPM_value'),
                "live_data_sale_status": live_data.get('sale_status'),
                "live_data_GPM_status": live_data.get('GPM_status'),
                "live_data_recommend_rate": int(live_data.get('recommend_rate')),
                "live_data_high_recommend_rate": 1 if live_data.get('high_recommend_rate') else 0,
                "live_data_high_live_day": live_data.get('live_day'),
                "live_data_high_live_product_num": live_data.get('live_product_num'),
                "live_data_high_avg_live_online_dur": live_data.get('avg_live_online_dur'),
                "live_data_high_avg_live_avg_peru_watch_dur": live_data.get('live_avg_peru_watch_dur'),
                "live_data_high_avg_live_med_peru_watch_dur": live_data.get('live_med_peru_watch_dur'),
                "live_data_high_avg_live_avg_price": live_data.get('live_avg_price'),
                "video_data_percentage": video_data.get('percentage'),
                "video_data_count": video_data.get('count'),
                "video_data_watching_num": video_data.get('watching_num'),
                "video_data_sale_low": video_data.get('sale_low'),
                "video_data_sale_high": video_data.get('sale_high'),
                "video_data_sale_value": video_data.get('sale_value'),
                "video_data_GPM_low": video_data.get('GPM_low'),
                "video_data_GPM_high": video_data.get('GPM_high'),
                "video_data_GPM_value": video_data.get('GPM_value'),
                "video_data_sale_status": video_data.get('sale_status'),
                "video_data_GPM_status": video_data.get('GPM_status'),
                "video_data_recommend_rate": int(video_data.get('recommend_rate')),
                "video_data_high_recommend_rate": 1 if video_data.get('high_recommend_rate') else 0,
                "video_data_live_day": video_data.get('live_day'),
                "video_data_live_product_num": video_data.get('live_product_num'),
                "video_data_avg_live_online_dur": video_data.get('avg_live_online_dur'),
                "video_data_live_avg_peru_watch_dur": video_data.get('live_avg_peru_watch_dur'),
                "video_data_live_med_peru_watch_dur": video_data.get('live_med_peru_watch_dur'),
                "video_data_live_avg_price": video_data.get('live_avg_price'),
                "deduplication": deduplication,
                "spider_time": update_time
            }
            list_res.append(item)
        db_res = self.eb_supports.insert_many(self.clean_table,
                                              list_res,
                                              conflict=[
                                                  "task_id", "uid", "live_data_percentage", "live_data_count",
                                                  "live_data_watching_num", "live_data_sale_low", "live_data_sale_high",
                                                  "live_data_sale_value", "live_data_GPM_low", "live_data_GPM_high",
                                                  "live_data_GPM_value", "live_data_sale_status",
                                                  "live_data_GPM_status",
                                                  "live_data_recommend_rate", "live_data_high_recommend_rate",
                                                  "live_data_high_live_day",
                                                  "live_data_high_live_product_num", "live_data_high_live_product_num",
                                                  "live_data_high_avg_live_online_dur",
                                                  "live_data_high_avg_live_avg_peru_watch_dur",
                                                  "live_data_high_avg_live_med_peru_watch_dur",
                                                  "live_data_high_avg_live_avg_price",
                                                  "video_data_percentage", "video_data_count",
                                                  "video_data_watching_num",
                                                  "video_data_sale_low", "video_data_sale_high",
                                                  "video_data_sale_value",
                                                  "video_data_GPM_low", "video_data_GPM_high",
                                                  "video_data_GPM_value",
                                                  "video_data_sale_status", "video_data_sale_status",
                                                  "video_data_GPM_status",
                                                  "video_data_recommend_rate", "video_data_high_recommend_rate",
                                                  "video_data_live_day",
                                                  "video_data_live_product_num", "video_data_avg_live_online_dur",
                                                  "video_data_live_avg_peru_watch_dur",
                                                  "video_data_live_med_peru_watch_dur", "video_data_live_avg_price",
                                                  "deduplication", "spider_time"
                                              ]
                                              )
        if db_res >= 0:
            return True, self.table, db_res
        else:
            return False, self.table, db_res


if __name__ == '__main__':
    offset = 0
    qc = CleanBuyinAuthorStatDataAuthorOverviewV2()
    while True:
        sql = f"""
            select task_id, data, deduplication, update_time from buyin_authorStatData_authorOverviewV2 where
             date_sub(CURDATE(),INTERVAL 2 DAY) <= DATE(update_time) LIMIT 1000 OFFSET {offset};
        """
        res = qc.eb_supports.query(sql)
        if not res:
            break
        qc.process_item(res)
        offset += 1000
