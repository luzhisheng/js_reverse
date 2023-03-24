import os


MONGODB_CONF = {
    'host': '127.0.0.1',
    'port': 27017,
    'username': '',
    'pwd': "",
    'db': '1688',
    'source': '1688',
    'status': '',
    'producer': ''
}

DOCS_PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
excel_path = os.path.join(DOCS_PATH, '1688/docs/')
