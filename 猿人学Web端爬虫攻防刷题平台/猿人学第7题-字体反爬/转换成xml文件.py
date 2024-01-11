from fontTools.ttLib import TTFont


class App(object):

    def __init__(self):
        pass

    def get_xml(self):
        font = TTFont('下载.woff')
        font.saveXML('转换成xml文件.xml')

    def run(self):
        self.get_xml()


if __name__ == '__main__':
    app = App()
    app.run()
