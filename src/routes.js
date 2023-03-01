import {createWebHistory, createRouter} from "vue-router";
import Home from './pages/home.vue';
import About from './pages/about.vue';
import Contact from './pages/contact.vue';

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
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
]

const router  = createRouter({
    history:createWebHistory(),
    routes
});
export default router;
