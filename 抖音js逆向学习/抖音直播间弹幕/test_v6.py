from douyin_pb2 import PushFrame, Response, ChatMessage

# p = PushFrame()
# p.seqId = 1000
# p.logId = 2000

# info = p.SerializeToString()
# print(info)

info = b'\x08\xe8\x07\x10\xd0\x0f'
p = PushFrame()
p.ParseFromString(info)
print(p.seqId)
print(p.logId)
