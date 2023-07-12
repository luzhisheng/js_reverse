from base import Base


class 精选联盟达人清单(Base):

    def __init__(self):
        super(精选联盟达人清单, self).__init__()
        self.clean_buyin_authorStatData_authorOverviewV2 = 'clean_buyin_authorStatData_authorOverviewV2'
        self.clean_buyin_contact_info = 'clean_buyin_contact_info'
        self.clean_buyin_authorStatData_seekAuthor = 'clean_buyin_authorStatData_seekAuthor'

    def get_excel(self):
        sql = f"""
            select author_base_uid, author_base_nickname, author_base_fans_num, author_base_author_level from
             {self.clean_buyin_authorStatData_seekAuthor};
        """
        res = self.eb_supports.query(sql)
        print(res)

    def run(self):
        self.get_excel()


if __name__ == '__main__':
    a = 精选联盟达人清单()
    a.run()
