from dao.mysql_dao import StoreMysqlPool
from datetime import datetime
import settings


class Base(object):

    def __init__(self):
        self.eb_supports = StoreMysqlPool(**settings.mysql_server_baiyin)

    def log(self, s):
        print('【%s】 %s' % (datetime.now(), s), flush=True)
