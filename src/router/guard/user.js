import { useUserStore } from '@/store/modules/user';
import { USER_TOKEN } from '@/utils/key';
import { getUserInfo } from '@/api/login';

export function createUserGuard(router) {
  router.beforeEach(async (to) => {
    const userStore = useUserStore();

    if (to.path !== '/login' && !userStore.role) {
      const token = localStorage.getItem(USER_TOKEN);

      if (token) {
        try {
          const userInfo = (await getUserInfo()).data;
          if (userInfo && userInfo.role) {
            userStore.setUserInfo(userInfo);
            return true;
          } else {
            userStore.logout();
          }
        } catch {
          userStore.logout();
        }
      }

      return {
        path: '/login',
        query: {
          originPath: to.path,
          ...to.query,
        },
      };
    }
  });
}
