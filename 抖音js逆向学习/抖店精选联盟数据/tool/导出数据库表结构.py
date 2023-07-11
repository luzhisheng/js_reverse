import settings
import os

PATH_STR = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))


def export_database_table_structure(host, user, password, db, path):
    dump101 = f'mysqldump --column-statistics=0 -h {host} -u{user} -p{password} -d {db} > {path}'
    result = os.system(dump101)
    print(result)


def daduoduo_tabel():
    host = settings.mysql_server_baiyin.get('host')
    user = settings.mysql_server_baiyin.get('user')
    password = settings.mysql_server_baiyin.get('password')
    db = settings.mysql_server_baiyin.get('db')
    path_dir = f'{PATH_STR}/sql/baiyin/{db}.sql'
    export_database_table_structure(host, user, password, db, path_dir)


if __name__ == '__main__':
    daduoduo_tabel()
