import { createWebHashHistory, createRouter } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
import Dashboard from './routes/modules/dashboard';
import System from './routes/modules/system';
import Mutiple from './routes/modules/mutiple';
import { createUserGuard } from './guard/user';
import { createTitleGuard } from './guard/title';
import { createPermissionGuard } from './guard/permission';

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: BaseLayout,
    children: [...Dashboard, ...System, ...Mutiple],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hideInMenu: true,
      key: 'login',
    },
  },
];

export default {
  install(Vue) {
    const router = createRouter({
      history: createWebHashHistory(),
      routes,
    });
    Vue.use(router);

    createUserGuard(router);
    createPermissionGuard(router);
    createTitleGuard(router);
  },
};
