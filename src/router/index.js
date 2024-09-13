import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: '首页',
        path: '/',
        component: () => import('../views/home.vue'),
    }, {
        name: '首页',
        path: '/home',
        component: () => import('../views/home.vue'),
    }, {
        name: '角色',
        path: '/roles',
        component: () => import('../views/roles.vue'),
    }, {
        name: '画廊',
        path: '/gallery',
        component: () => import('../views/gallery.vue'),
    }, {
        name: '社区',
        path: '/community',
        component: () => import('../views/community.vue'),
    }
];

//这里不是通过new来创建，通过createRouter 方法创建，使用的模式不是通过mode来定义
const router = createRouter({
    // 路由数据
    routes,
    // 路由匹配模式
    history: createWebHistory(),
})

export default router