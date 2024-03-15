## cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC
#set(SRC add.cpp div.cpp mult.cpp main.cpp sub.cpp)
## 设置构建输出目录
#set(EXECUTABLE_OUTPUT_PATH  E:/code/js_reverse/CMake构建/v1/bulid/aa/bb/cc)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
## 得到变量 ${SRC}并构建exe文件
#add_executable(app ${SRC})


## cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC PROJECT_SOURCE_DIR 表示命令行执行cmake .. 后面的..
#aux_source_directory(${PROJECT_SOURCE_DIR} SRC)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
## 得到变量 ${SRC}并构建exe文件
#add_executable(app ${SRC})


## cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC CMAKE_CURRENT_BINARY_DIR 表示命令 CMakeLists.txt 所在的目录
#file(GLOB SRC ${CMAKE_CURRENT_BINARY_DIR}/*.cpp)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
## 得到变量 ${SRC}并构建exe文件
#add_executable(app ${SRC})


## cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC CMAKE_CURRENT_BINARY_DIR 表示命令 CMakeLists.txt 所在的目录
#aux_source_directory(${PROJECT_SOURCE_DIR}/src SRC)
## 指定头文件目录
#include_directories(${PROJECT_SOURCE_DIR}/include)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
## 得到变量 ${SRC}并构建exe文件
#add_executable(app ${SRC})


# cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC CMAKE_CURRENT_BINARY_DIR 表示命令 CMakeLists.txt 所在的目录
#aux_source_directory(${PROJECT_SOURCE_DIR}/src SRC)
## 指定头文件目录
#include_directories(${PROJECT_SOURCE_DIR}/include)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
## 指定库路径
#set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/lib2)
## 生成动态库
#add_library(library SHARED ${SRC})
## 生成静态库
##add_library(library STATIC ${SRC})


# cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC CMAKE_CURRENT_BINARY_DIR 表示命令 CMakeLists.txt 所在的目录
#file(GLOB SRC ${PROJECT_SOURCE_DIR}/main.cpp)
## 指定头文件目录
#include_directories(${PROJECT_SOURCE_DIR}/include)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
#
#link_libraries(library)
#link_directories(${PROJECT_SOURCE_DIR}/lib1/Debug)
#add_executable(app ${SRC})


## cmake版本
#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
## 设置变量SRC CMAKE_CURRENT_BINARY_DIR 表示命令 CMakeLists.txt 所在的目录
#file(GLOB SRC ${PROJECT_SOURCE_DIR}/main.cpp)
## 指定头文件目录
#include_directories(${PROJECT_SOURCE_DIR}/include)
##  C++ 标准版本
#set(CMAKE_CXX_STANDARD 11)
#
## 如果是自定义库就需要 定义路径
#link_directories(${PROJECT_SOURCE_DIR}/lib1/Debug)
#message(STATUS "111111111111111")
#add_executable(app ${SRC})
## FATAL_ERROR 错误抛出 程序停止
##message(FATAL_ERROR "2222222222222222")
## 链接动态库
#target_link_libraries(app PUBLIC library)
## STATUS 正常日志输出
#message(STATUS "55555555555555")

#cmake_minimum_required(VERSION 3.2)
## 项目名称
#project(test)
#
#file(GLOB SRC ${PROJECT_SOURCE_DIR}/main.cpp)
#include_directories(${PROJECT_SOURCE_DIR}/include)
#set(CMAKE_CXX_STANDARD 11)
#
#set(aaa 1)
#message(${aaa})
## 拼接字符串
#set(bbb ${aaa} 2)
#message(${bbb})
## 追加字符串
#list(APPEND bbb 3)
#message(${bbb})
## 删除字符串
#list(REMOVE_ITEM bbb 1)
#message(${bbb})

cmake_minimum_required(VERSION 3.2)
project(test)
file(GLOB SRC ${PROJECT_SOURCE_DIR}/h.cpp)
# 定义宏DEBUG 类似定义变量
add_definitions(-DDEBUG)
add_executable(app ${SRC})
