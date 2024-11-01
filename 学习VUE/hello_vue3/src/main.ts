// 引入 createApp 用于创建应用
import { createApp } from 'vue'
// 引入APP根组件
import App from './App.vue'
// 引入路由器
import router from "./router";
//创建一个app
const app = createApp(App)
//使用路由器
app.use(router)
//挂载整个应用到app容器中
app.mount('#app')
