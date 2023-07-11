# -*- coding: utf8 -*-
from collections import OrderedDict
from copy import deepcopy
import pymysql
import time
from DBUtils.PooledDB import PooledDB
from DBUtils.PersistentDB import PersistentDB
import traceback
from datetime import datetime


class StoreMysqlPool(object):
    """
    mysql读写相关操作，pymysql，使用PooledDB连接池
    Args:
        host:数据库ip
        user:数据库用户名
        password:数据库用户密码
        db:数据库名
        port:数据库端口，默认3306
        mincached:最少的空闲连接数， 默认为1
        charset:数据库编码，默认utf8
    """

    def __init__(self, host="", user="", password="", db="", port=3306, mincached=1,
                 pattern=1, charset="utf8"):
        self.host = host

        if pattern == 1:
            self.pool = PooledDB(pymysql, mincached, host=host, user=user, passwd=password, db=db, port=port,
                                 charset=charset)
            self.close_able = True
        elif pattern == 2:
            self.pool = PersistentDB(pymysql, host=host, user=user, passwd=password, db=db, port=port,
                                     charset=charset)

            self.close_able = False
        self._last_use_time = time.time()

    def close(self, db):
        if db is not None:
            db.close()

    def connect(self):
        return self.pool.connection()

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close_all()

    @staticmethod
    def _cursor(db):
        # return db.cursor(pymysql.cursors.DictCursor)
        return db.cursor()

    def query(self, sql):
        """
        根据sql查询
        Returns：
            数组的数组，外层数组元素为一行，内存数组元素为一行的一列
        """
        db = self.connect()
        cur = self._cursor(db)
        rows = []
        try:
            cur.execute(sql)
            db.commit()
            rows = cur.fetchall()
        except pymysql.OperationalError:
            print(traceback.format_exc())
        except Exception as e:
            print('query{}'.format(e))
            print(traceback.format_exc())
        finally:
            cur.close()
            self.close(db)
        return rows

    def count(self, tb):
        """
        返回某表的行数
        Args:
            tb:字符串，表名称
        """
        sql = 'select count(*) from %s' % tb
        results = self.query(sql)
        if len(results) == 1 and len(results[0]) == 1:
            return int(results[0][0])

    def do(self, sql, flag='rowcount'):
        """
        执行sql，insert/delete/update操作
        Args:
            sql:要执行的sql
            flag:返回值类型，flag=lastrowid返回lastrowid，flag=rowcount返回rowcount
        """
        db = self.connect()
        cur = self._cursor(db)
        r = None
        try:
            cur.execute(sql)
            db.commit()
            r = 1
            if flag == 'lastrowid':
                r = cur.lastrowid
            elif flag == 'rowcount':
                r = cur.rowcount
        except pymysql.OperationalError:
            print("time: %s; Error on %s: %s" % (str(datetime.now()), self.host, sql[0: 200]))
            print(traceback.format_exc())
            r = -1
        except Exception:
            print("time: %s; Error to MySQL on %s: %s" % (str(datetime.now()), self.host, sql[0: 200]))
            print(traceback.format_exc())
            r = -1
        finally:
            cur.close()
            self.close(db)
        return r

    def save(self, table, data, mapping_fields=dict()):
        """
        将字典直接insert到数据库
        Args:
            table:字符串，插入目标表的名称
            data:字典格式，key为字段名称，value为字段值，如{'id':'1','name':'temp'}
            mapping_fields: 用于保持data字典的key与数据库字段的对应关系，
                            如果结果字典的某个key不包含在mapping_fields中，则将直接使用key作为字段名
        """

        if len(data) <= 0:
            return -1
        try:
            fields = ''
            values = ''
            for d in data:
                if d in mapping_fields:
                    fields += "`%s`," % (str(mapping_fields[d]))
                else:
                    fields += "`%s`," % (str(d))
                values += "'%s'," % (pymysql.escape_string(str(data[d])))
            if len(fields) <= 0 or len(values) <= 0:
                return -1
            sql = "insert ignore into %s(%s) values(%s)" % (table, fields[:-1], values[:-1])
            return self.do(sql)
        except Exception:
            print(traceback.format_exc())
            return -1

    def saveMany(self, sql, values, flag='lastrowid'):
        """
        执行sql，insert/delete/update操作
        :param table: 'insert into table(id,name) values(%s,%s)'
        :param names: 字符串
        :param values:[{1,2},{1,2},...]  是一个列表，列表中的每一个元素必须是元组！！！
        :param flag:
        :return:
        """
        db = self.connect()
        cur = self._cursor(db)
        r = None
        try:
            cur.executemany(sql, values)
            db.commit()
            r = 1
            if flag == 'lastrowid':
                r = cur.lastrowid
            elif flag == 'rowcount':
                r = cur.rowcount

        except pymysql.OperationalError:
            print("Error connecting to MySQL on %s: %s" % (self.host, sql[0:255]))
            print(traceback.format_exc())
            r = -1
        except Exception:
            print("Error connecting to MySQL on %s: %s" % (self.host, sql[0:255]))
            print(traceback.format_exc())
            r = -1
        finally:
            cur.close()
            self.close(db)
        return r

    def update(self, table, data, field, mapping_fields=dict()):
        """
        将字典直接update到数据库
        Args:
            table:字符串，更新目标表的名称
            data:字典格式，key为字段名称，value为字段值，如{'id':'1','name':'temp'}
            field:唯一索引字段，即根据该字段判断是否为同一条记录，作为where条件
            mapping_fields: 用于保持data字典的key与数据库字段的对应关系，
                            如果结果字典的某个key不包含在mapping_fields中，则将直接使用key作为字段名
        """
        if len(data) <= 0:
            return -1
        else:
            try:
                values = ''
                field_value = None
                for d in data:
                    key = d
                    if d in mapping_fields:
                        key = mapping_fields[d]
                    if key == field:
                        field_value = data[d]
                    values += "%s='%s'," % (str(key), pymysql.escape_string(str(data[d])))
                if len(values) <= 0 or field_value is None:
                    return -1
                sql = "update " + table + " set " + values[:-1] + " where " + field + "='" + pymysql.escape_string(
                        str(field_value)) + "'"
                return self.do(sql, flag='rowcount')
            except Exception:
                print(traceback.format_exc())
                return -1

    def saveorupdate(self, table, data, field, mapping_fields=dict()):
        """
        将字典更新到数据库，如果已存在则update，不存在则insert
        Args:
            table:字符串，更新目标表的名称
            data:字典格式，key为字段名称，value为字段值，如{'id':'1','name':'temp'}
            field:唯一索引字段，即根据词字段判断是否为同一条记录，作为where条件
            mapping_fields: 用于保持data字典的key与数据库字段的对应关系，
                            如果结果字典的某个key不包含在mapping_fields中，则将直接使用key作为字段名
        """
        if len(data) <= 0:
            return -1
        try:
            field_value = None
            if field in data:
                field_value = data[field]
            else:
                for key in mapping_fields:
                    if mapping_fields[key] == field and key in data:
                        field_value = data[key]
            if field_value is None:
                return -1
            querysql = "select count(1) from " + table + " where " + field + "='" + pymysql.escape_string(
                    str(field_value)) + "'"
            ed = self.query(querysql)
            if ed and ed[0][0] > 0:
                return self.update(table, data, field, mapping_fields)
            else:
                return self.save(table, data, mapping_fields)
        except Exception:
            print(traceback.format_exc())
            return -1

    def tableCreate(self, tb_name, likeTable):
        """
        创建数据表格
        :param tb_name: table's name
        :return: 1 ok , -1 error
        """
        # sql = "SELECT table_name FROM information_schema.TABLES WHERE table_name ='{}';".format(tb_name)
        sql = "show tables;"
        datas = self.query(sql)
        if tb_name in [str(i[0]) for i in datas]:
            # 存在
            sql = "select * from {} limit 10;".format(tb_name)
            if not self.query(sql):
                print("{} 是空表, 正在truncate.....".format(tb_name))
                sql = " truncate {};".format(tb_name)
                datas = self.query(sql)
            else:
                print("表格存在：{}".format(tb_name))

        else:
            # 不存在 创建 清空
            print("{} 表格不存在，正在创建....".format(tb_name))
            sql = "create table {} like {};".format(tb_name, likeTable)
            datas = self.query(sql)
            sql = " truncate {};".format(tb_name)
            datas = self.query(sql)
        return 1

    def dictsToOrderDicts(self, list_dicts):
        alist = []
        # list_dicts = [list_dicts] if isinstance(list_dicts, dict) else list_dicts
        ks = list_dicts[0].keys()  # 有序
        order_dict = OrderedDict()
        for adict in list_dicts:
            for k in ks:
                order_dict[k] = adict[k]
            alist.append(deepcopy(order_dict))
        return alist

    def insert_many(self, table, list_dicts, conflict=''):
        '''
        [批量插入]
        :param store_name:
        :param table:
        :param list_dicts:
        :param conflict: 冲突更新字段 local_date=CURRENT_DATE() or ['local_date','fields']
        :return:
        '''
        try:
            if len(list_dicts):
                orderDicts = self.dictsToOrderDicts(list_dicts)
                ks = orderDicts[0].keys()  # 获取键值
                if conflict:
                    if isinstance(conflict, str):
                        insert_sql = "insert ignore into {} ({}) values ({})  ON DUPLICATE KEY UPDATE {}".format(
                                table, ", ".join(ks), ("%s," * len(ks)).strip(","), conflict)
                    else:
                        if len(conflict):
                            conflict = ','.join(['{}=VALUES({})'.format(field, field) for field in conflict])
                            insert_sql = "insert ignore into {} ({}) values ({})  ON DUPLICATE KEY UPDATE {}".format(
                                    table, ", ".join(ks), ("%s," * len(ks)).strip(","), conflict)
                        else:
                            return -1

                else:
                    insert_sql = "insert ignore into {} ({}) values ({})".format(table, ", ".join(ks),
                                                                                 ("%s," * len(ks)).strip(","))
                values = []
                for adict in list_dicts:
                    values.append(tuple(adict.values()))
                res = self.saveMany(insert_sql, values, flag="rowcount")
                return res
            else:
                return -3
        except Exception as e:
            print('insert_many{}'.format(e))
            return -2

    def close_all(self):
        """
        关闭连接池全部连接
        请在确保连接不再需要时确认
        :return:
        """
        if self.close_able:
            self.pool.close()


def test():
    db = {
        'host': 'localhost',
        'user': 'root',
        'password': '',
        'db': 'test'
    }
    mq = StoreMysqlPool(**db)
    print(mq.count('urls'))


if __name__ == "__main__":
    test()
