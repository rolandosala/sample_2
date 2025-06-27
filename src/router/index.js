import { createRouter, createWebHistory } from "vue-router";
import Project from "../components/Project.vue";
const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', component: () => import('../components/Login.vue'), name: 'login' },
    { path: '/home', component: () => import('../components/Home.vue'), meta: { requiresAuth: true }, name: 'home' },
    {
        path: '/about', component: () => import('../components/About.vue'),
        children: [
            { path: 'projects', component: Project },
        ]
    },
    { path: '/:catchAll(.*)', component: () => import('../components/404.vue') }
]

const router = createRouter({
    history: createWebHistory('/sample_2'),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    if(to.meta.requiresAuth && !isAuthenticated){
        next('/login')
    } else if(to.name === 'login' && isAuthenticated) {
        next('/home')
    } else {
        next()
    }
})

export default router