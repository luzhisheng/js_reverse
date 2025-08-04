import matplotlib
import matplotlib.pyplot as plt
import os


def init_plot(chinese_font='SimHei'):
    """
    初始化 Matplotlib 绘图环境：
    1. 支持中文
    2. 自动判断是否有显示器（GUI），自动切换后端
    3. 返回 SHOW_PLOT 变量，方便后续控制 plt.show()
    """

    # 支持中文
    plt.rcParams['font.sans-serif'] = [chinese_font]
    plt.rcParams['axes.unicode_minus'] = False

    # 判断是否有显示器
    def has_display():
        if os.name == "posix":  # Linux / macOS
            return "DISPLAY" in os.environ
        return True

    if has_display():
        try:
            matplotlib.use("TkAgg")
            SHOW_PLOT = True
        except Exception:
            matplotlib.use("Agg")
            SHOW_PLOT = False
    else:
        matplotlib.use("Agg")
        SHOW_PLOT = False

    return SHOW_PLOT
