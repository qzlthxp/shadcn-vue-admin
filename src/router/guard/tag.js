import { useTagStore } from '@/store/modules/tag';

export function createTagGuard(router) {
  router.beforeEach((to) => {
    if (to.name !== 'login') {
      const tagStore = useTagStore();
      tagStore.addTag(to);
    }
  });
}
