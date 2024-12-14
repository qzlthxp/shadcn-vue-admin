import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { pinia } from './store';
import './mock';
import 'nprogress/nprogress.css';
import './assets/index.css';
import './assets/transition-class.css';

createApp(App).use(router).use(pinia).mount('#app');
