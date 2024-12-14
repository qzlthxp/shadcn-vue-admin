import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: () => ({
    activeMenu: '',
    openMenu: new Set(),
  }),
  actions: {
    updateActiveMenu()
  }
});
