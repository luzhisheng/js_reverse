import win32com.client as win32

# 创建AutoCAD应用程序的COM对象
acad = win32.Dispatch("AutoCAD.Application")

# 获取当前活动文档
doc = acad.ActiveDocument
print(doc.name)

