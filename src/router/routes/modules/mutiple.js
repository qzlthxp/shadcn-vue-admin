export default [
  {
    path: 'mutiple',
    redirect: '/mutiple/level21/level31',
    meta: {
      title: '一级菜单',
      key: 'mutiple',
    },
    children: [
      {
        path: 'level21',
        meta: {
          title: '二级菜单1',
          key: 'mutiple-level21',
          openMenuKeys: ['mutiple'],
        },
        children: [
          {
            path: 'level31',
            component: () => import('@/views/mutiple/level31/index.vue'),
            meta: {
              title: '三级菜单',
              key: 'mutiple-level21-level31',
              openMenuKeys: ['mutiple', 'mutiple-level21'],
              permission: 'mutiple-level21-level31',
            },
          },
        ],
      },
      {
        path: 'level22',
        component: () => import('@/views/mutiple/level22/index.vue'),
        meta: {
          title: '二级菜单2',
          key: 'mutiple-level22',
          openMenuKeys: ['mutiple'],
          permission: 'mutiple-level22',
        },
      },
    ],
  },
];
