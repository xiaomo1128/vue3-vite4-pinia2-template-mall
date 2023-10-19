import { createRouter, createWebHashHistory } from "vue-router";
import layout from '@/views/layout/index.vue';

let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/layout'
        },
        {
            path: '/layout',
            component: layout,
        },
        {
            path: '/login',
            component: ()=> import('@/views/login/index.vue')
        },
    ]
})

export default router;