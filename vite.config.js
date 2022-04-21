import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: '.',
  server:{
    open:true, //vite项目启动时自动打开浏览器
    port:8081, //vite项目启动时自定义端口
    hmr:true, //开启热更新
  },
  resolve:{
    alias:{ //设置别名
      "@":resolve(__dirname,"src"),
      "@c":resolve(__dirname,"src/components"),
    }
  },
  plugins: [vue()],
  build:{ //js,css和img资源分别分门别类在js/css/img文件夹
    assetsDir:"static",
    rollupOptions:{
      input:{
        index:resolve(__dirname,"index.html"),
      },
      output:{
        chunkFileNames:'static/js/[name]-[hash].js',
        entryFileNames:"static/js/[name]-[hash].js",
        assetFileNames:"static/[ext]/name-[hash].[ext]"
        }
    },
  },
})
