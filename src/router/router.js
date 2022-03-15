import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {   
        path: '/',
        name: "catalog",
        component: () => import("../components/v-catalog"),
    },
    { 
        path: '/cart',
        name: "cart",
        component: () => import("../components/v-cart"),
        // props: true 
    },
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})

















