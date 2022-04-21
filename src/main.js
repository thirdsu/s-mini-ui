import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router/index.js"
import Vant from 'vant';
import 'vant/lib/index.less';

const app=createApp(App)
app.use(router)
app.use(Vant)
app.mount('#app')
