import {createWebHistory, createRouter} from "vue-router";
import Home from './pages/home.vue';
import About from './pages/about.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component : Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    }
]

const router  = createRouter({
    history:createWebHistory(),
    routes
});
export default router;
