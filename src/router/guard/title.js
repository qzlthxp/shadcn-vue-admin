import { useTitle } from '@vueuse/core';

export function createTitleGuard(router) {
  router.afterEach((to) => {
    const { title } = to.meta;

    useTitle(title);
  });
}
