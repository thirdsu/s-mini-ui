# s-mini-ui
基于vue3.0+vue-router+vite+原生组件+vant-ui组件库开发的小型移动端组件库

# 下载
git clone https://github.com/thirdsu/s-mini-ui.git

## 安装
npm i

## 启动
npm run dev

## 打包
npm run build

### 表单组件构建思路
表单组件构建：
1、在Form组件中顶层注入收集子组件实例方法的provide
2、在子组件创建后，向此方法注入子组件实例，由此，Form组件能够收集到所有子组件实例，进而进行操作
