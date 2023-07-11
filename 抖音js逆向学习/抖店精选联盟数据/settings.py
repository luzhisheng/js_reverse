from datetime import datetime
import os


def log(s):
    print('【%s】 %s' % (datetime.now(), s), flush=True)


if os.environ.get('ENV_REPLACE_API') == 'prod':
    log('生产环境')
    mysql_server_baiyin = {
        "host": '127.0.0.1',
        "user": 'root',
        "password": os.environ.get('DB_PASSWORD_BAIYIN'),
        "db": 'eb_supports_baiyin',
        "port": 3306,
        "charset": 'utf8mb4'
    }
else:
    log('测试环境')
    mysql_server_baiyin = {
        "host": '127.0.0.1',
        "user": 'root',
        "password": '123456',
        "db": 'eb_supports_baiyin',
        "port": 3306,
        "charset": 'utf8mb4'
    }
