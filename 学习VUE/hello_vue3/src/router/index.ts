import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Details from '@/pages/Details.vue'

//创建路由器
const router = createRouter({
    history: createWebHistory(), //路由器的工作模式
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'news',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'news-details',
                    path: 'details', // 注意：子路由的 path 不需要以 "/" 开头
                    component: Details
                }
            ]
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
    ]
})

// 暴露出去 router
export default router