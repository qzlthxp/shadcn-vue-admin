import { defineStore } from 'pinia';
import { USER_TOKEN } from '@/utils/key';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '',
    email: '',
    avatar: '',
    role: '',
    permissions: [],
  }),
  actions: {
    setUserInfo(data) {
      this.$patch(data);
    },
    logout() {
      localStorage.removeItem(USER_TOKEN);
      this.$reset();
    },
  },
});
