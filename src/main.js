import { createApp } from 'vue';
import App from './App.vue';
import './assets/index.css';
import { router } from './router';
import './mock';

createApp(App).use(router).mount('#app');
