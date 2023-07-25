from datetime import datetime


class Base(object):

    def __init__(self):
        pass

    def log(self, s):
        print('【%s】 %s' % (datetime.now(), s), flush=True)
