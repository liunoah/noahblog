FROM alpine:latest

# 在容器启动时持续 ping baidu.com 并输出结果
CMD ["sh", "-c", "while true; do ping -c 1 baidu.com; sleep 1; done"]