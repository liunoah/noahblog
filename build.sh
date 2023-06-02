#!/bin/bash

# Docker 镜像名称
IMAGE_NAME="noahblog"

# Docker 容器名称
CONTAINER_NAME="noahblog"

# 构建 Docker 镜像 "$(dirname "$0")"为当前路径
docker build -t $IMAGE_NAME "$(dirname "$0")"

# 检查容器是否正在运行
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    # 关闭正在运行的容器
    docker stop $CONTAINER_NAME
fi

# 检查容器是否存在
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    # 删除容器
    docker rm $CONTAINER_NAME
fi

# 启动新的容器 外部端口3000
docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME

# 删除所有未被使用的镜像、容器和数据卷
docker image prune

# 查看运行容器
docker logs $CONTAINER_NAME