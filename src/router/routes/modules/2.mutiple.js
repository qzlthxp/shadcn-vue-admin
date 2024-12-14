export default [
  {
    path: 'mutiple',
    name: 'mutiple',
    redirect: '/mutiple/level21/level31',
    meta: {
      title: '一级菜单',
    },
    children: [
      {
        path: 'level21',
        name: 'mutipleLevel21',
        meta: {
          title: '二级菜单1',
          openMenuNames: ['mutiple'],
        },
        children: [
          {
            path: 'level31',
            name: 'mutipleLevel21Level31',
            component: () => import('@/views/mutiple/level31/Index.vue'),
            meta: {
              title: '三级菜单',
              openMenuNames: ['mutiple', 'mutipleLevel21'],
              permission: 'mutiple-level21-level31',
            },
          },
        ],
      },
      {
        path: 'level22',
        name: 'mutipleLevel22',
        component: () => import('@/views/mutiple/level22/Index.vue'),
        meta: {
          title: '二级菜单2',
          openMenuNames: ['mutiple'],
          permission: 'mutiple-level22',
        },
      },
    ],
  },
];
