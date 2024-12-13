import { Laptop, Users, VenetianMask } from 'lucide-vue-next';

export default [
  {
    path: 'system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: Laptop,
      key: 'system',
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/system/user/index.vue'),
        meta: {
          title: '用户管理',
          icon: Users,
          key: 'system-user',
          openMenuKeys: ['system'],
          permission: 'system-user',
        },
      },
      {
        path: 'role',
        component: () => import('@/views/system/role/index.vue'),
        meta: {
          title: '角色管理',
          icon: VenetianMask,
          key: 'system-role',
          openMenuKeys: ['system'],
          permission: 'system-role',
        },
      },
    ],
  },
];
