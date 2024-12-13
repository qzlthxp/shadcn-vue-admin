<template>
  <SidebarGroup>
    <SidebarMenu>
      <AppSidebarMenuItem
        v-for="(menu, index) in computedMenus"
        :key="index"
        :item="menu"
        :path="[menu.path]"
      ></AppSidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>

<script setup>
  import { menus } from '@/router/routes';
  import { SidebarMenu, SidebarGroup } from '@/components/ui/sidebar';
  import AppSidebarMenuItem from './AppSidebarMenuItem.vue';
  import { useRouter } from 'vue-router';
  import { ref, watch, provide, computed } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const props = defineProps({
    accordion: {
      type: Boolean,
      default: false,
    },
  });

  const router = useRouter();
  const userStore = useUserStore();

  const filterTreeData = (treeData, permissions) => {
    const permissionSet = new Set(permissions);

    return treeData.reduce((acc, item) => {
      const hasPermission = item.meta.permission
        ? permissionSet.has(item.meta.permission)
        : false;

      // 处理子节点
      const children = item.children
        ? filterTreeData(item.children, permissions)
        : [];

      if (hasPermission || children.length > 0) {
        acc.push({
          ...item,
          children,
        });
      }

      return acc;
    }, []);
  };

  const computedMenus = computed(() => {
    return filterTreeData(menus, userStore.permissions);
  });

  const activeMenu = ref('');
  const openMenu = ref(new Set());

  const updateActiveMenu = (menu) => {
    activeMenu.value = menu.meta.key;
  };

  const updateOpenMenu = (menu, open = true) => {
    if (!open) {
      if (openMenu.value.has(menu.meta.key)) {
        openMenu.value.delete(menu.meta.key);
      }
    } else {
      const keys = [menu.meta.key, ...(menu.meta.openMenuKeys || [])];
      if (props.accordion) {
        openMenu.value = new Set();
      }

      keys.forEach((key) => {
        if (!openMenu.value.has(key)) {
          openMenu.value.add(key);
        }
      });
    }
  };

  provide('menuState', {
    activeMenu,
    openMenu,
    updateActiveMenu,
    updateOpenMenu,
  });

  watch(
    router.currentRoute,
    (newVal) => {
      updateActiveMenu(newVal);
      updateOpenMenu(newVal, true);
    },
    {
      immediate: true,
    },
  );
</script>
