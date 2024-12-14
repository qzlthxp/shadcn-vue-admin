import { defineStore } from 'pinia';
import Dashboard from '@/router/routes/modules/1.dashboard';

export const useTagStore = defineStore('tag', {
  state: () => ({
    cacheTag: new Set([Dashboard[0].name]),
    tags: [
      {
        name: Dashboard[0].name,
        meta: Dashboard[0].meta,
      },
    ],
    currentTagName: 'dashboard',
  }),
  actions: {
    addTag(menu) {
      this.currentTagName = menu.name;
      if (this.cacheTag.has(menu.name)) return;
      this.cacheTag.add(menu.name);
      const { name, meta } = menu;
      this.tags.push({
        name,
        meta,
      });
    },
    removeTag(tag) {
      this.tags = this.tags.filter((item) => item.name !== tag.name);
      this.cacheTag.delete(tag.name);
      return this.currentTagName === tag.name;
    },
    removeStart(index) {
      let needRedirect = false;
      const removeList = this.tags.splice(index);
      removeList.forEach((removeTagItem) => {
        this.cacheTag.delete(removeTagItem.name);
        if (this.currentTagName === removeTagItem.name) {
          this.currentTagName = Dashboard[0].name;
          needRedirect = true;
        }
      });
      return needRedirect;
    },
    // clearTag(tag) {
    //   this.tags = this.tags.filter((item) => {
    //     if (item.meta.fixed) return true;
    //     if (tag && item.name === tag.name) return true;
    //     return false;
    //   });
    //   this.cacheTag = tag.name
    //     ? new Set([Dashboard[0].name, tag.name])
    //     : new Set([Dashboard[0].name]);
    //   return tag.name
    //     ? this.currentTagName === tag.name
    //     : this.currentTagName === Dashboard[0].name;
    // },
  },
});
