from base import Base
import json


class CleanBuyinAuthorStatDataSeekAutho(Base):
    name = 'buyin_authorStatData_seekAuthor'

    def __init__(self):
        super(CleanBuyinAuthorStatDataSeekAutho, self).__init__()
        self.table = self.name
        self.clean_table = "clean_" + self.table

    def process_item(self, resp):
        list_res = []
        if not resp:
            self.log(f'清洗{self.table}数据-不存在')
            return ''

        for task_id, data, deduplication, update_time in resp:
            author_base = json.loads(data).get('author_base')
            author_tag = json.loads(data).get('author_tag')
            uid = deduplication.split('&')[1]
            item = {
                "task_id": task_id,
                "author_base_uid": uid.replace("uid=", ""),
                "author_base_nickname": author_base.get('nickname'),
                "author_base_avatar": author_base.get('avatar'),
                "author_base_fans_num": author_base.get('fans_num'),
                "author_base_gender": author_base.get('gender'),
                "author_base_city": author_base.get('city'),
                "author_base_author_level": author_base.get('author_level'),
                "author_base_avatar_big": author_base.get('avatar_big'),
                "author_tag_work_cate": json.dumps(author_tag.get('work_cate')) if author_tag.get('work_cate') else '',
                "author_tag_main_cate": json.dumps(author_tag.get('main_cate')),
                "author_tag_dark_horse": author_tag.get('dark_horse'),
                "author_tag_contact_icon": author_tag.get('contact_icon'),
                "author_tag_high_reply": author_tag.get('high_reply'),
                "author_tag_invitation_status": author_tag.get('invitation_status'),
                "author_tag_invite_status": author_tag.get('invite_status'),
                "author_tag_satisfy_requirement": author_tag.get('satisfy_requirement'),
                "author_tag_already_cooperated": 1 if author_tag.get('already_cooperated') else 0,
                "author_tag_is_star": 1 if author_tag.get('is_star') else 0,
                "deduplication": uid,
                "spider_time": update_time
            }
            list_res.append(item)
        db_res = self.eb_supports.insert_many(self.clean_table,
                                              list_res,
                                              conflict=[
                                                  "task_id", "author_base_uid", "author_base_nickname",
                                                  "author_base_avatar", "author_base_fans_num",
                                                  "author_base_gender", "author_base_city",
                                                  "author_base_author_level", "author_base_avatar_big",
                                                  "author_tag_work_cate", "author_tag_main_cate",
                                                  "author_tag_dark_horse", "author_tag_contact_icon",
                                                  "author_tag_high_reply", "author_tag_invitation_status",
                                                  "author_tag_invite_status", "author_tag_satisfy_requirement",
                                                  "author_tag_already_cooperated", "author_tag_is_star",
                                                  "deduplication", "spider_time"
                                              ]
                                              )
        if db_res >= 0:
            return True, self.table, db_res
        else:
            return False, self.table, db_res


if __name__ == '__main__':
    offset = 0
    qc = CleanBuyinAuthorStatDataSeekAutho()
    while True:
        sql = f"""
            select task_id, data, deduplication, update_time from buyin_authorStatData_seekAuthor where
             date_sub(CURDATE(),INTERVAL 5 DAY) <= DATE(update_time) LIMIT 1000 OFFSET {offset};
        """
        res = qc.eb_supports.query(sql)
        if not res:
            break
        qc.process_item(res)
        offset += 1000
