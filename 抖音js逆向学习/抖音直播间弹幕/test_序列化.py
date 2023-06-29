from 抖音直播间弹幕.extractors.douyin_pb2 import PushFrame

p = PushFrame()
p.seqId = 1000
p.logId = 2000

info = p.SerializeToString()
print(f"序列化后的二进制数据：{info}")

info = b'\x08\xe8\x07\x10\xd0\x0f'
p = PushFrame()
p.ParseFromString(info)
print(f"反序列化后的真实数据：{p.seqId}, {p.logId}")
