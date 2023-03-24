输出到文件

    protoc --decode_raw < protobuf/dy > protobuf/dy.txt
 
编译文件

    protoc --python_out=./ protobuf/addressbook.proto
   
