import win32com.client as win32
import pythoncom


def vtpnt(x, y, z=0):
    """坐标点转化为浮点数"""
    return win32.VARIANT(pythoncom.VT_ARRAY | pythoncom.VT_R8, (x, y, z))


try:
    # 创建AutoCAD应用程序的COM对象
    print("尝试连接到AutoCAD...")
    acad = win32.Dispatch("AutoCAD.Application")
    acad.Visible = True
    print("成功连接到AutoCAD。")

    # 获取当前活动文档
    doc = acad.ActiveDocument
    print(f"当前文档名称: {doc.Name}")

    # 获取文档中的模型空间
    model_space = doc.ModelSpace
    print("获取文档中的模型空间。")

    # 定义线段的起点和终点，并添加到模型空间中
    start_point = vtpnt(0, 0, 0)
    end_point = vtpnt(100, 100, 0)
    print(f"起点: {start_point}, 终点: {end_point}")

    line = model_space.AddLine(start_point, end_point)
    # 颜色文档 https://help.autodesk.com/view/ACD/2022/CHS/?guid=GUID-D08F9A8E-5551-4473-A270-D95F7F32F51A
    line.Color = 250  # 将线的颜色
    print("在模型空间中添加了一条直线并设置了颜色。")

    # 刷新AutoCAD文档以显示新绘制的线段
    doc.Regen(1)  # 1表示刷新模型空间
    print("刷新AutoCAD文档以显示新绘制的线段。")

    print("直线已绘制成功！")

except Exception as e:
    print(f"发生错误: {e}")
