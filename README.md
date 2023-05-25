# how to run this project
`npx expo start`
android and ios scan th QR
web addr
`127.0.0.1:19006`
# show
## build ios
```shell
eas build --platform ios
```
## build web
* create web-build
```shell
 npx expo export:web
 ```
*  run web
 ```shell
  npx serve web-build --single //--single 选项，将所有请求重定向到 index.html 文件
```
## Production mode 
```
npx expo start --no-dev --minify
test
