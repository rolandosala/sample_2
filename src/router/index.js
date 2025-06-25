import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: import ('../components/About.vue')}
]

const router = createRouter({
    history: createWebHistory('/sample_2'),
    routes
})

export default router