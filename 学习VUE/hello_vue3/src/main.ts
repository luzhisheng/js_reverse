// 引入 createApp 用于创建应用
import { createApp } from 'vue'
// 引入APP根组件
import App from './App.vue'
// 引入路由器
import router from "./router";
// 第一步：引入pinia
import {createPinia} from 'pinia'
// 第二步：创建pinia
const pinia = createPinia()
//创建一个app
const app = createApp(App)
//使用路由器
app.use(router)
// 第三步：安装pinia
app.use(pinia)
//挂载整个应用到app容器中
app.mount('#app')
