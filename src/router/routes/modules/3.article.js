import { NotebookText, Book } from 'lucide-vue-next';

export default [
  {
    path: 'article',
    name: 'article',
    redirect: '/article/column/v3-together',
    meta: {
      title: '文章',
      icon: NotebookText,
    },
    children: [
      {
        path: 'column',
        name: 'articleColumn',
        meta: {
          title: '掘金专栏',
          openMenuNames: ['article'],
        },
        children: [
          {
            path: 'v3-together',
            name: 'articleColumnV3Together',
            component: () => import('@/views/article/v3-together/Index.vue'),
            meta: {
              title: 'Vue3文档',
              icon: Book,
              openMenuNames: ['article', 'articleColumn'],
              permission: 'article-column-v3-together',
            },
          },
        ],
      },
    ],
  },
];
