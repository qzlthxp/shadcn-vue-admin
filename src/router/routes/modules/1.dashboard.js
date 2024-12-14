import { Gauge } from 'lucide-vue-next';

export default [
  {
    path: 'dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      title: '数据看板',
      icon: Gauge,
      fixed: true,
      permission: 'dashboard',
    },
  },
];
