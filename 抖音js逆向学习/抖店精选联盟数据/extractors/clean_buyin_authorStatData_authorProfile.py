from base import Base
import json


class CleanBuyinAuthorStatDataAuthorProfile(Base):
    name = 'buyin_authorStatData_authorProfile'

    def __init__(self):
        super(CleanBuyinAuthorStatDataAuthorProfile, self).__init__()
        self.table = self.name
        self.clean_table = "clean_" + self.table

    def process_item(self, resp):
        list_res = []
        if not resp:
            self.log(f'清洗{self.table}数据-不存在')
            return ''

        for task_id, data, deduplication, update_time in resp:
            data = json.loads(data)
            item = {
                "task_id": task_id,
                "uid": deduplication.replace("uid=", ""),
                "level": data.get('level'),
                "account_douyin": data.get('account_douyin'),
                "gender": data.get('gender'),
                "city": data.get('city'),
                "bind_lark_status": 1 if data.get('bind_lark_status') else 0,
                "nickname": data.get('nickname'),
                "fans_sum": data.get('fans_sum'),
                "works_type": str(data.get('works_type')) if data.get('works_type') else '',
                "agency": data.get('agency'),
                "product_main_type": str(data.get('product_main_type')) if data.get('product_main_type') else '',
                "product_main_type_array": str(data.get('product_main_type_array')) if data.get('product_main_type_array') else '',
                "score": data.get('score'),
                "reputation_level": data.get('reputation_level'),
                "special_price": data.get('special_price'),
                "join_price": data.get('join_price'),
                "bargaining": data.get('bargaining'),
                "duration": data.get('duration'),
                "in_business": data.get('in_business'),
                "introduction": data.get('introduction'),
                "sale_type": data.get('sale_type'),
                "rec_reason": str(data.get('rec_reason')) if data.get('rec_reason') else '',
                "daren_plaza_rec_reason": str(data.get('daren_plaza_rec_reason')) if data.get('daren_plaza_rec_reason') else '',
                "avatar": data.get('avatar'),
                "error_msg": data.get('error_msg'),
                "share_url_douyin": data.get('share_url_douyin'),
                "recommend_reasons": str(data.get('recommend_reasons')) if data.get('recommend_reasons') else '',
                "credit_score": data.get('credit_score'),
                "intention_catgory": str(data.get('intention_catgory')) if data.get('intention_catgory') else '',
                "cooperate_mode": data.get('cooperate_mode'),
                "commission_ratio": data.get('commission_ratio'),
                "sell_requirement": str(data.get('sell_requirement')) if data.get('sell_requirement') else '',
                "dark_horses": str(data.get('dark_horses')) if data.get('dark_horses') else '',
                "high_online_reply_rate": 1 if data.get('high_online_reply_rate') else 0,
                "high_invitation_reply_rate": 1 if data.get('high_invitation_reply_rate') else 0,
                "insitution_id": data.get('insitution_id'),
                "web_homepage_url": data.get('web_homepage_url'),
                "high_cooperation": 1 if data.get('high_cooperation') else 0,
                "is_star": 1 if data.get('is_star') else 0,
                "tags": str(data.get('tags')) if data.get('tags') else '',
                "act_info": data.get('act_info') if data.get('act_info') else '',
                "deduplication": deduplication,
                "spider_time": update_time
            }
            list_res.append(item)
        db_res = self.eb_supports.insert_many(self.clean_table,
                                              list_res,
                                              conflict=[
                                                  "task_id", "uid", "level", "account_douyin", "gender",
                                                  "city", "bind_lark_status", "nickname", "fans_sum",
                                                  "works_type", "agency", "product_main_type",
                                                  "product_main_type_array", "score", "reputation_level",
                                                  "special_price", "join_price",
                                                  "bargaining", "duration", "in_business", "introduction",
                                                  "sale_type", "rec_reason", "daren_plaza_rec_reason", "avatar",
                                                  "error_msg", "share_url_douyin", "recommend_reasons", "credit_score",
                                                  "intention_catgory", "cooperate_mode", "commission_ratio",
                                                  "sell_requirement",
                                                  "sell_requirement", "dark_horses", "high_online_reply_rate",
                                                  "high_invitation_reply_rate", "high_invitation_reply_rate",
                                                  "insitution_id", "web_homepage_url", "high_cooperation",
                                                  "is_star", "tags", "act_info", "deduplication", "spider_time"
                                              ]
                                              )
        if db_res >= 0:
            return True, self.table, db_res
        else:
            return False, self.table, db_res


if __name__ == '__main__':
    offset = 0
    qc = CleanBuyinAuthorStatDataAuthorProfile()
    while True:
        sql = f"""
            select task_id, data, deduplication, update_time from buyin_authorStatData_authorProfile where
             date_sub(CURDATE(),INTERVAL 20 DAY) <= DATE(update_time) LIMIT 1000 OFFSET {offset};
        """
        res = qc.eb_supports.query(sql)
        if not res:
            break
        qc.process_item(res)
        offset += 1000
