import { useUserStore } from '@/store/modules/user';

export function createPermissionGuard(router) {
  router.beforeEach((to) => {
    const userStore = useUserStore();

    if (to.meta.permission) {
      const hasPermission = userStore.permissions.includes(to.meta.permission);

      if (!hasPermission) {
        return {
          path: '/login',
          query: {
            originPath: to.path,
            ...to.query,
          },
        };
      }
    }
  });
}
