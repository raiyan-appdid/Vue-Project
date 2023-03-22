import { createApp } from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './routes';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import './assets/main.css'

createApp(App).use(VueAxios, axios).use(router).mount('#app')
