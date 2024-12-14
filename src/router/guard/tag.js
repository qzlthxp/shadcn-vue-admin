import { useTagStore } from '@/store/modules/tag';

export function createTagGuard(router) {
  router.beforeEach((to) => {
    const tagStore = useTagStore();
    tagStore.addTag(to);
  });
}
