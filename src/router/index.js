import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/dashboard/Dashboard.vue'),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
