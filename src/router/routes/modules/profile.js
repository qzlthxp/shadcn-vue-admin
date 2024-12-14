import { UserRoundPen } from 'lucide-vue-next';

export default [
  {
    path: 'profile',
    name: 'profile',
    component: () => import('@/views/profile/Index.vue'),
    meta: {
      title: '个人中心',
      permission: 'profile',
      icon: UserRoundPen,
      hideInMenu: true,
    },
  },
];
