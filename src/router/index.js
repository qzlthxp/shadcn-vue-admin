import { createWebHashHistory, createRouter } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { createUserGuard } from './guard/user';
import { createTitleGuard } from './guard/title';
import { createPermissionGuard } from './guard/permission';
import { createProgressGuard } from './guard/nprogress';
import { menus as menuChildren } from './routes';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/dashboard',
    component: BaseLayout,
    children: menuChildren,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Index.vue'),
    meta: {
      hideInMenu: true,
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

    createProgressGuard(router);
    createUserGuard(router);
    createPermissionGuard(router);
    createTitleGuard(router);
  },
};
