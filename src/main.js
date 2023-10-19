import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css';
import '@/assets/styles/common.scss'
import router from './router';
import { store } from './store';

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
