import { Laptop, Users, VenetianMask } from 'lucide-vue-next';

export default [
  {
    path: 'system',
    name: 'system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: Laptop,
    },
    children: [
      {
        path: 'user',
        name: 'systemUser',
        component: () => import('@/views/system/user/Index.vue'),
        meta: {
          title: '用户管理',
          icon: Users,
          openMenuNames: ['system'],
          permission: 'system-user',
        },
        children: [
          {
            path: 'add',
            name: 'systemUserAdd',
            component: () => import('@/views/system/user/components/Add.vue'),
            meta: {
              title: '添加系统用户',
              hideInMenu: true,
              openMenuNames: ['system'],
              permission: 'system-user-add',
            },
          },
        ],
      },
      {
        path: 'role',
        name: 'systemRole',
        component: () => import('@/views/system/role/Index.vue'),
        meta: {
          title: '角色管理',
          icon: VenetianMask,
          openMenuNames: ['system'],
          permission: 'system-role',
        },
      },
    ],
  },
];
