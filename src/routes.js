import {createWebHistory, createRouter} from "vue-router";
import Home from './pages/home.vue';
import About from './pages/about.vue';
import Contact from './pages/contact.vue';
import API from './pages/api.vue';
import Detail from './pages/details.vue';

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
    {
        name: 'Api',
        path: '/api',
        component: API
    },
    {
        name: 'Detail',
        path: '/detail/:id',
        component: Detail
    },
]

const router  = createRouter({
    history:createWebHistory(),
    routes
});
export default router;
