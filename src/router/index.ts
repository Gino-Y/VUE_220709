import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router"
const routes :Array<RouteRecordRaw>= [
    {
        path:'/home',
        name: 'home',
        component:()=>import('../views/home.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})


