import { createRouter, createWebHistory } from "vue-router";
const routes = [
    { path: '/', component: () => import('../components/Home.vue') },
    { path: '/about', component: () => import('../components/About.vue') },
    { path: '/:catchAll(.*)', component: () => import('../components/404.vue')}
]

const router = createRouter({
    history: createWebHistory('/sample_2'),
    routes
})

export default router