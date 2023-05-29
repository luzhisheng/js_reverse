import torch
from models.common import DetectMultiBackend
from utils.general import (check_img_size, cv2, non_max_suppression, scale_boxes)
from utils.torch_utils import select_device
from utils.augmentations import letterbox
import numpy as np


class YOLOv5(object):
    # 参数设置
    _defaults = {
        "weights": "./best.pt",
        "source": "data/images/val",
        "data": "data/coco128.yaml",
        "imgsz": (150, 150),
        "conf_thres": 0.25,
        "iou_thres": 0.45,
        "max_det": 1000,
        "device": "",
        "view_img": False,
        "save_txt": False,
        "save_conf": False,
        "save_crop": False,
        "nosave": False,
        "classes": None,
        "agnostic_nms": False,
        "augment": False,
        "visualize": False,
        "update": False,
        "project": "runs/detect",
        "name": 'exp',
        "exist_ok": False,
        "line_thickness": 3,
        "hide_labels": False,
        "hide_conf": False,
        "half": False,
        "dnn": False,
        "vid_stride": 1
    }

    # 初始化操作，加载模型
    def __init__(self, device='0', **kwargs):
        self.__dict__.update(self._defaults)
        self.device = select_device(device)
        self.half = self.device != "cpu"
        self.model = DetectMultiBackend(weights=self.weights, device=self.device, dnn=self.dnn, data=self.data,
                                        fp16=self.half)
        self.stride, self.names, self.pt = self.model.stride, self.model.names, self.model.pt
        self.imgsz = check_img_size(self.imgsz, s=self.stride)

    # 推理部分
    def infer(self, inImg):
        # 使用letterbox方法将图像大小调整为150大小
        img = letterbox(inImg, new_shape=self.imgsz)[0]

        # 归一化与张量转换
        img = img[:, :, ::-1].transpose(2, 0, 1)  # h w c to c h w
        img = np.ascontiguousarray(img)  # 令数组内存连续
        img = torch.from_numpy(img).to(self.device)
        img = img.half() if self.half else img.float()  # uint8 to fp16/32
        img /= 255.0  # 0 - 255 to 0.0 - 1.0
        if img.ndimension() == 3:
            img = img.unsqueeze(0)

        # 推理
        pred = self.model(img, augment=True)[0]
        # NMS
        pred = non_max_suppression(pred, self.conf_thres, self.iou_thres, classes=self.classes, agnostic=True)

        bbox_xyxy = []
        confs = []
        cls_ids = []

        # 解析检测结果
        for i, det in enumerate(pred):
            if det is not None and len(det):
                # 将检测框映射到原始图像大小
                det[:, :4] = scale_boxes(img.shape[2:], det[:, :4], inImg.shape).round()
                # 保存结果
                for *xyxy, conf, cls in reversed(det):
                    bbox_xyxy.append(xyxy)
                    confs.append(conf.item())
                    cls_ids.append(int(cls.item()))

                xyxys = torch.Tensor(bbox_xyxy)
                confss = torch.Tensor(confs)
                cls_ids = torch.Tensor(cls_ids)
        return xyxys, confss, cls_ids


if __name__ == '__main__':
    with open('./16329967796715117.jpg', 'rb') as f:
        input_image = f.read()
    imBytes = np.frombuffer(input_image, np.uint8)
    iImage = cv2.imdecode(imBytes, cv2.IMREAD_COLOR)
    yolov5_c = YOLOv5()
    result = yolov5_c.infer(iImage)
    result = result[0].view(-1).int()
    image_rec = cv2.rectangle(iImage, (result[0].item(), result[1].item()), (result[2].item(), result[3].item()),
                              (0, 0, 255), 1, 8)
    import matplotlib.pyplot as plt
    import matplotlib

    matplotlib.use('TkAgg')
    plt.imshow(image_rec)
    plt.show()
