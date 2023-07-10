from handlers.base import Base
import pymysql.cursors
import settings

base = Base()


def getConnection():
    return pymysql.connect(
        host=settings.HOST,
        port=settings.PORT,
        user=settings.USER,
        password=settings.PASSWORD,
        database=settings.DATABASE,
        autocommit=True,
        cursorclass=pymysql.cursors.DictCursor
    )


def sqlConn(func):
    """ use a decorator to make connection easier to use
    """

    def __sqlFunc(*args):
        conn = None
        cursor = None
        try:
            conn = getConnection()
            cursor = conn.cursor()
            return func(*args, cursor=cursor)
        finally:
            if cursor:
                cursor.close()
            if conn:
                conn.close()

    return __sqlFunc


@sqlConn
def getFinancialData(symbol, startDate, endDate, page, limit, **kwargs):
    """ fetch financial from db
    """
    sql = f"SELECT symbol, date, open_price, close_price, volume FROM Financial " + \
          f"WHERE date >= '{startDate}' AND " + \
          f"date <= '{endDate}' AND symbol = '{symbol}' LIMIT {(page - 1) * limit}, {limit};"

    # base.log(sql)
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    rows = cursor.fetchall()
    return rows


@sqlConn
def getPaginationData(symbol, startDate, endDate, page, limit, **kwargs):
    """ get pagination information
    """
    sql = f"SELECT COUNT(*) AS cnt FROM Financial WHERE date >= '{startDate}' " + \
          f"AND date <= '{endDate}' AND symbol = '{symbol}';"

    # base.log(sql)
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    c = cursor.fetchone()

    return {
        'count': c['cnt'],
        'page': page,
        'limit': limit,
        'pages': (c['cnt'] + limit - 1) // limit
    }


@sqlConn
def initDatabase(**kwargs):
    sql = """
        CREATE TABLE IF NOT EXISTS Financial(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        symbol VARCHAR(255) NOT NULL,
        `date` VARCHAR(16) NOT NULL,
        open_price VARCHAR(255) NOT NULL,
        close_price VARCHAR(255) NOT NULL,
        volume VARCHAR(255) NOT NULL,
        UNIQUE(symbol, `date`)
    );
    """

    cursor = kwargs.get('cursor')
    cursor.execute(sql)


@sqlConn
def updateFinancialData(symbol, data, **kwargs):
    """ save data to db
    @return 0: success, other: failure
    """

    # use ignore, so the insert will ignore those duplicated key
    sql = "INSERT IGNORE INTO Financial (symbol, date, open_price, close_price, volume) VALUES "

    i = 1
    for date, fields in data.items():
        sql += "('%s', '%s', '%s', '%s', '%s')" % \
               (symbol, date, fields['1. open'], fields['4. close'], fields['6. volume'])

        if i < len(data):
            sql += ","

        i += 1

    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    base.log(f'更新 {symbol} 数量: {cursor.rowcount}')
    return cursor.rowcount


@sqlConn
def insert_project_spider(symbol, item_list, **kwargs):
    sql = f"""
        INSERT IGNORE INTO {symbol} (task_id, payload_get, payload_post, deduplication, weight) VALUES 
    """
    for item in item_list:
        sql += "('%s', '%s', '%s', '%s', '%s')," % (
            item['task_id'], item['payload_get'],
            item['payload_post'], item['deduplication'],
            item['weight']
        )
    sql = sql.rstrip(',')

    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    base.log(f'插入 {symbol} 数量: {cursor.rowcount}')
    return cursor.rowcount


@sqlConn
def insert_project_user_monitor(symbol, item_list, **kwargs):
    sql = f"""
        INSERT IGNORE INTO {symbol} (task_id, authorId, BeginTime, EndTime, weight) VALUES 
    """
    for item in item_list:
        sql += "('%s', '%s', '%s', '%s', '%s')," % (
            item['task_id'], item['authorId'],
            item['BeginTime'], item['EndTime'],
            item['weight']
        )
    sql = sql.rstrip(',')
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    base.log(f'插入 {symbol} 数量: {cursor.rowcount}')
    return cursor.rowcount


@sqlConn
def get_user_monitor(symbol, **kwargs):
    sql = f"""
        SELECT
                authorId,
                BeginTime,
                EndTime
        FROM
                clean_daduoduo_dy_author_room_info
        WHERE
                authorId = '{symbol}'
        ORDER BY BeginTime DESC 
        LIMIT 5
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


@sqlConn
def get_project_spider(symbol, task_id, deduplication, **kwargs):
    """
    sql 判断5分钟内是否已经抓取
    """
    sql = f"""
        SELECT 
            status
        FROM
            {symbol} 
        WHERE
            deduplication = '{deduplication}' and
            create_time>=DATE_SUB(NOW(),INTERVAL 5 MINUTE)
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchone()
    return statistics


@sqlConn
def getStatisticsData(symbol, startDate, endDate, **kwargs):
    """ get the average value of the given peroid
    """
    sql = f"SELECT AVG(open_price) AS avg_open, AVG(close_price) AS avg_close, AVG(volume) " + \
          f"AS avg_volume FROM Financial WHERE date >= '{startDate}' " + \
          f"AND date <= '{endDate}' AND symbol = '{symbol}';"
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchone()
    return statistics


@sqlConn
def get_anchor_info(symbol, **kwargs):
    sql = f"""
            SELECT
            b.UserId,
            b.UserId as userSn,
            b.HeaderImg,
            b.FavCnt,
            b.FansCnt,
            b.IsShow,
            BeginTime,
            Gmv,
            b.SubDetail,
            b.Reputation,
            b.DouYinId,
            b.NAME,
            c.LiveName as title,
            c.BeginTime as startTime,
            c.EndTime as finishTime
        FROM
            clean_daduoduo_dy_author_room_info c
            RIGHT JOIN (
            SELECT
                UserId,
                HeaderImg,
                FavCnt,
                FansCnt,
                IsShow,
                SubDetail,
                Reputation,
                DouYinId,
                NAME,
                spider_time
            FROM
                clean_daduoduo_dy_author_detail 
            WHERE
                UserId = '{symbol}' 
            ORDER BY
                spider_time DESC 
                LIMIT 1 
            ) b ON c.authorId = b.UserId 
        ORDER BY
            c.spider_time DESC 
            LIMIT 1
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchone()
    return statistics


@sqlConn
def get_anchor_search(symbol, page, limit, **kwargs):
    sql = f"""
        SELECT
            UserId,
            NAME,
            HeaderImg,
            DouYinId,
            FansCnt 
        FROM
            clean_daduoduo_dy_author_detail 
        WHERE
            NAME LIKE '%{symbol}%' 
        ORDER BY
            UserLevel DESC 
            LIMIT {(page - 1) * limit}, {limit};
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


# 搜索结果数
@sqlConn
def get_anchor_search_count(symbol, **kwargs):
    sql = f"""
        SELECT
            count(1) as total 
        FROM
            clean_daduoduo_dy_author_detail 
        WHERE
            NAME LIKE '%{symbol}%';
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    total = cursor.fetchone()
    return total


@sqlConn
def get_anchor_gmv(symbol, **kwargs):
    symbol_str = ','.join(symbol)
    sql = f"""
        SELECT
            a.authorId,
            a.BeginTime,
            a.Gmv
        FROM
            clean_daduoduo_dy_author_room_info AS a,
            ( SELECT authorId, MAX( RoomId ) AS RoomId FROM clean_daduoduo_dy_author_room_info WHERE authorId IN
             {symbol} GROUP BY authorId ) AS b 
        WHERE
            a.authorId = b.authorId 
            AND a.RoomId = b.RoomId    
        ORDER BY
            field( b.authorId, {symbol_str});
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


@sqlConn
def get_anchor_room_list(symbol, page, limit, goods_live_status, sort_order, **kwargs):
    # item.title 直播标题
    # item.startTime 开播时间
    # item.actualSalesMoney 销售额
    # item.totalUser 直播销售额
    # item.minuteEnterUser 直播销量
    # item.actualSales 带货热度
    if int(goods_live_status) == 0:
        bring_goods = ''
    else:
        bring_goods = f'and SaleCnt != 0'
    sql = f"""
        SELECT
            RoomPic as coverUrl,
            LiveName as title,
            BeginTime as startTime,
            Gmv as actualSalesMoney,
            TotalUser as totalUser,
            SaleCnt as minuteEnterUser,
            UserCount as actualSales,
            RoomId as roomSn
        FROM
            clean_daduoduo_dy_author_room_info 
        WHERE
            authorId = '{symbol}' {bring_goods}
        ORDER BY
            BeginTime {sort_order}
            LIMIT {(page - 1) * limit}, {limit};
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


# 直播记录数
@sqlConn
def get_anchor_room_list_count(symbol, goods_live_status, **kwargs):
    # item.title 直播标题
    # item.startTime 开播时间
    # item.actualSalesMoney 销售额
    # item.totalUser 直播销售额
    # item.minuteEnterUser 直播销量
    # item.actualSales 带货热度
    if int(goods_live_status) == 0:
        bring_goods = ''
    else:
        bring_goods = f'and SaleCnt != 0'
    sql = f"""
        SELECT
            count(1) as total
        FROM
            clean_daduoduo_dy_author_room_info 
        WHERE
            authorId = '{symbol}' {bring_goods};
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    total = cursor.fetchone()
    return total


@sqlConn
def get_anchor_room_big_screen_goods(symbol, page, limit, goods_live_status, sortKey, sort_order, **kwargs):
    # thumbCoverUrl
    # title
    # price
    # sales
    # salesMoney
    sql = f"""
        SELECT
            GoodPic as thumbCoverUrl,
            GoodName as title,
            SellPrice as price,
            SaleCnt as sales,
            SaleCnt as totalSales,
            Gmv as salesMoney
        FROM
            clean_daduoduo_dy_live_room_goods 
        WHERE
            RoomId = '{symbol}'
        ORDER BY
            {sortKey} {sort_order}
            LIMIT {(page - 1) * limit}, {limit};
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


@sqlConn
def get_anchor_room_big_screen_goods_count(symbol, **kwargs):  # goods_live_status
    sql = f"""
        SELECT
           count(1) as total
        FROM
            clean_daduoduo_dy_live_room_goods 
        WHERE
            RoomId = '{symbol}';
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    total = cursor.fetchone()
    return total


@sqlConn
def get_anchor_room_goods(symbol, page, limit, sort_order, **kwargs):
    # item.thumbCoverUrl
    # item.title
    # item.price
    # item.totalSales
    # item.totalSalesMoney
    sql = f"""
        SELECT
            GoodPic as thumbCoverUrl,
            GoodName as title,
            SellPrice as price,
            SaleCnt as totalSales,
            Gmv as totalSalesMoney
        FROM
            clean_daduoduo_dy_live_room_goods 
        WHERE
            RoomId = '{symbol}'
        ORDER BY
            StartTime {sort_order}
            LIMIT {(page - 1) * limit}, {limit};
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


# 直播间商品数量
@sqlConn
def get_anchor_room_goods_count(symbol, **kwargs):
    # item.thumbCoverUrl
    # item.title
    # item.price
    # item.totalSales
    # item.totalSalesMoney
    sql = f"""
        SELECT
            count(1) as total
        FROM
            clean_daduoduo_dy_live_room_goods 
        WHERE
            RoomId = '{symbol}';
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    total = cursor.fetchone()
    return total


@sqlConn
def get_anchor_room_info(symbol, **kwargs):
    # title
    # coverUrl
    # startTime
    # finishTime
    # liveTimeLength 直播时长（分钟）
    # liveGoodsScore 本场带货口碑
    # actualSalesMoney 销售额
    # userVO {avatarThumbUrl, nickname, lastRoomStartTime, uniqueId }
    # userCountVO { other, city, videoDetail, myFollow  }
    # followCount 直播涨粉
    # actualSales 销量
    # totalUser 观看人次
    # hasLiveStatus
    # minuteEnterUser 分钟流速
    # avgOnline 平均在线
    # avgStayLength 平均停留
    # likeCount 本场点赞
    # converFanRate 转粉率
    # guestUnitPrice 客单价
    # userContribution 千次观看成交（UV价值）
    # minuteSalesMoney 分钟销售额
    # minuteSales 分钟销售
    # goodsCount 商品数
    # totalSalesMoney 销售额
    # converRate 整体转化率
    sql = f"""
        SELECT
            people_Name as title,
            people_HeaderImg as coverUrl,
            room_BeginTime as startTime,
            room_EndTime as finishTime,
            CONCAT(UNIX_TIMESTAMP(room_EndTime)-UNIX_TIMESTAMP(room_BeginTime)) as liveTimeLength,
            people_UserId as uniqueId,
            room_Gmv as actualSalesMoney,
            room_SaleCnt as actualSales,
            room_TotalUser as totalUser,
            room_MaxUserCnt as minuteEnterUser,
            room_AvgUserCount as avgOnline,
            room_viewer_info_other as other,
            room_viewer_info_video as videoDetail,
            room_viewer_info_follow as myFollow,
            room_viewer_info_feed as feed,
            room_viewer_info_city as city,
            room_viewer_info_plaza as plaza,
            room_viewer_info_search as search,
            room_viewer_info_home as home,
            room_GoodsCnt as goodsCount,
            CONCAT((room_Gmv / room_SaleCnt)) as guestUnitPrice,
            CONCAT((room_Gmv / room_TotalUser)) as userContribution
        FROM
            clean_daduoduo_dy_live_room_detail 
        WHERE
            RoomId = '{symbol}'
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


# 本场点赞
@sqlConn
def get_anchor_room_big_screen_likeCount(symbol, **kwargs):
    sql = f"""
        SELECT FavCnt as likeCount FROM
        clean_daduoduo_dy_live_room_flow_info
        WHERE
        RoomId = '{symbol}'
        ORDER BY FullTime DESC
        LIMIT 1
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchone()
    return statistics


# 直播数据增长相关
# FavCnt 点赞
# FollowCnt 涨粉
# TotalUserCnt 直播间总人数
@sqlConn
def get_anchor_room_data_increase(symbol, **kwargs):
    sql = f"""
        SELECT FavCnt as likeCount, FollowCnt as followCount, TotalUserCnt FROM
        clean_daduoduo_dy_live_room_flow_info
        WHERE
        RoomId = '{symbol}'
        ORDER BY FullTime DESC
        LIMIT 1
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchone()
    return statistics
    pass


@sqlConn
def get_anchor_room_big_screen(symbol, **kwargs):
    # detailData.title
    # detailData.coverUrl
    # detailData.followerCount 粉丝
    # detailData.createTime 开播时间
    # detailData.liveTimeLength 直播时长 分钟
    # detailData.liveStatus 直播状态 [0,1] 0已下播1直播中
    # detailData.actualSalesMoney 直播间实时总销售额（元）
    # detailData.actualSales 总销量
    # detailData.userCount 当前在线人数
    # detailData.totalUser 总观看人数
    # detailData.avgOnline 平均在线
    # detailData.minuteEnterUser 分钟流量
    # detailData.avgStayLength 平均停留
    # detailData.userContribution UV价值
    # detailData.guestUnitPrice 客单价
    # detailData.likeCount 本场点赞
    # detailData.followCount 直播涨粉
    sql = f"""
        SELECT
                people_Name as title,
                people_HeaderImg as coverUrl,
                room_BeginTime as createTime,
                REPLACE(room_BeginTime, ' ', 'T') as startTime,
                REPLACE(room_EndTime, ' ', 'T') as finishTime,
                CONCAT(UNIX_TIMESTAMP(room_EndTime)-UNIX_TIMESTAMP(room_BeginTime)) as liveTimeLength,
                room_Gmv as actualSalesMoney,
                room_Gmv as salesExplain,
                0 as likeCount,
                room_viewer_info_follow as followCount,
                room_GoodsCnt as goodsCount,
                room_SaleCnt as actualSales,
                room_UserCount as userCount,
                room_TotalUser as totalUser,
                room_MaxUserCnt as minuteEnterUser,
                room_AvgUserCount as avgOnline,
                CONCAT((room_Gmv / room_SaleCnt)) as guestUnitPrice,
                CONCAT((room_Gmv / room_TotalUser)) as userContribution
        FROM
                clean_daduoduo_dy_live_room_detail 
        WHERE
                RoomId = '{symbol}'
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics


@sqlConn
def get_anchor_room_trend_first(symbol, **kwargs):
    sql = f"""
        SELECT
            DATE_FORMAT(STR_TO_DATE(FullTime, '%Y%m%d %H%i%s'), '%Y-%m-%dT%H:%i:%s') as dateKeyListValue,
            DATE_FORMAT(STR_TO_DATE(FullTime, '%Y%m%d'), '%Y-%m-%d') as dateKeyListLabel,
            UserCnt AS userCountListValue
        FROM
            clean_daduoduo_dy_live_room_flow_info 
        WHERE
            RoomId = '{symbol}'
        ORDER BY
            FullTime asc 
    """
    cursor = kwargs.get('cursor')
    cursor.execute(sql)
    statistics = cursor.fetchall()
    return statistics
