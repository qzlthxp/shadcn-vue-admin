import { CodeXml, ListTree } from 'lucide-vue-next';

export default [
  {
    path: 'open-source',
    name: 'openSource',
    redirect: '/open-source/uni-app/tree-select',
    meta: {
      title: '开源',
      icon: CodeXml,
    },
    children: [
      {
        path: 'uni-app',
        name: 'openSourceUniapp',
        meta: {
          title: 'uni-app',
          openMenuNames: ['openSource'],
        },
        children: [
          {
            path: 'tree-select',
            name: 'openSourceUniappTreeSelect',
            component: () =>
              import('@/views/open-source/uni-app/TreeSelect.vue'),
            meta: {
              title: '树形选择器',
              icon: ListTree,
              openMenuNames: ['openSource', 'openSourceUniapp'],
              permission: 'open-source-uni-app-tree-select',
            },
          },
        ],
      },
    ],
  },
];
