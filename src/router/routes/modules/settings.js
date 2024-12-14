import { Settings } from 'lucide-vue-next';

export default [
  {
    path: 'settings',
    name: 'settings',
    component: () => import('@/views/settings/Index.vue'),
    meta: {
      title: '系统设置',
      permission: 'settings',
      icon: Settings,
      hideInMenu: true,
    },
  },
];
