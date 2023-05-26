import ddddocr


def disparity():
    slide = ddddocr.DdddOcr(det=False, ocr=False)
    with open('./img/target.png', 'rb') as f:
        target_bytes = f.read()
    with open('./img/background.png', 'rb') as f:
        background_bytes = f.read()
    coordinate = slide.slide_match(target_bytes, background_bytes, simple_target=True)
    return coordinate


if __name__ == '__main__':
    print(disparity())
