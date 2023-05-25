FROM node:16.20.0

# 创建一个工作目录
WORKDIR /app

# 复制当前目录下的代码到工作目录
COPY . .

# 安装 expo-cli 和 serve
RUN npm install -g expo-cli serve

# 安装应用程序依赖
RUN npm install

# 构建 Expo Web 应用程序
RUN npx expo export:web --output-dir web-build

# 暴露 80 端口
EXPOSE 80

# 启动静态文件服务器
CMD ["npx", "serve", "web-build", "--single", "-l", "80"]
