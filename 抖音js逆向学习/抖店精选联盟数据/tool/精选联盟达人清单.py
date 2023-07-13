from base import Base
import pandas as pd


class 精选联盟达人清单(Base):

    def __init__(self):
        super(精选联盟达人清单, self).__init__()
        self.clean_buyin_authorStatData_authorOverviewV2 = 'clean_buyin_authorStatData_authorOverviewV2'
        self.clean_buyin_contact_info = 'clean_buyin_contact_info'
        self.clean_buyin_authorStatData_seekAuthor = 'clean_buyin_authorStatData_seekAuthor'
        self.clean_buyin_authorStatData_authorProfile = 'clean_buyin_authorStatData_authorProfile'

    def export_excel(self, export):
        # 将字典列表转换为DataFrame
        pf = pd.DataFrame(list(export))
        columns = ['抖音账户', '抖音ID', '等级LV', '粉丝数', '地址', '主推类目', '直播带货销售占比', '带货直播场次',
                   '带货直播观看人数', '场均销售额', '直播GPM', '视频带货销售额占比', '带货视频数量', '带货视频播放量',
                   '单视频销售额', '视频GPM']
        pf.columns = columns
        file_path = pd.ExcelWriter('../file/name.xlsx')
        # 替换空单元格
        pf.fillna(' ', inplace=True)
        # 输出
        pf.to_excel(file_path, index=False)
        # 保存表格
        file_path.close()

    def get_res(self):
        sql = f"""
            SELECT
                nickname as '抖音账户',
                account_douyin as '抖音ID',
                LEVEL as '等级LV',
                fans_sum as '粉丝数',
                city as '地址',
                product_main_type  as '主推类目',
                b.`直播带货销售占比`,
                b.`带货直播场次`,
                b.`带货直播观看人数`,
                b.`场均销售额`,
                b.`直播GPM`,
                b.`视频带货销售额占比`,
                b.`带货视频数量`,
                b.`带货视频播放量`,
                b.`单视频销售额`,
                b.`视频GPM`
            FROM
                clean_buyin_authorStatData_authorProfile c
                RIGHT JOIN (
                SELECT
                    uid,
                    live_data_percentage as '直播带货销售占比',
                    live_data_count as '带货直播场次',
                    live_data_watching_num as '带货直播观看人数',
                    concat_ws('-', live_data_sale_low, live_data_sale_high) as '场均销售额',
                    concat_ws('-', live_data_GPM_low, live_data_GPM_high) as '直播GPM',
                    video_data_percentage as '视频带货销售额占比',
                    video_data_count as '带货视频数量',
                    video_data_watching_num as '带货视频播放量',
                    concat_ws('-', video_data_sale_low, video_data_sale_high) as '单视频销售额',
                    concat_ws('-', video_data_GPM_low, video_data_sale_high) as '视频GPM'
                FROM
                    clean_buyin_authorStatData_authorOverviewV2 
                ) b ON c.uid = b.uid 
            ORDER BY
                c.LEVEL DESC
        """
        res_list = self.eb_supports.query(sql)
        return res_list

    def run(self):
        res_list = self.get_res()
        self.export_excel(res_list)


if __name__ == '__main__':
    a = 精选联盟达人清单()
    a.run()
