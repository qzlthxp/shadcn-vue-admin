<template>
  <SidebarGroup>
    <SidebarMenu>
      <AppSidebarMenuItem
        v-for="(menu, index) in computedMenus"
        :key="index"
        :item="menu"
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
  import { useTagStore } from '@/store/modules/tag';

  const props = defineProps({
    accordion: {
      type: Boolean,
      default: false,
    },
  });

  const router = useRouter();
  const userStore = useUserStore();
  const tagStore = useTagStore();

  const filterTreeData = (treeData, permissions) => {
    const permissionSet = new Set(permissions);

    return treeData.reduce((acc, item) => {
      // 检查是否隐藏在菜单中
      const isHidden = item.meta.hideInMenu === true;

      // 如果该项被隐藏，则不渲染该项及其子级
      if (isHidden) {
        return acc; // 直接返回累加器，不添加该项
      }

      const hasPermission = item.meta.permission
        ? permissionSet.has(item.meta.permission)
        : false;

      // 处理子节点
      const children = item.children
        ? filterTreeData(item.children, permissions)
        : [];

      // 如果有权限或子节点符合条件，则添加该项
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
    activeMenu.value = menu.name;
  };

  const updateOpenMenu = (menu, open = true) => {
    if (!open) {
      if (openMenu.value.has(menu.name)) {
        openMenu.value.delete(menu.name);
      }
    } else {
      const keys = [menu.name, ...(menu.meta.openMenuNames || [])];
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
      tagStore.addTag(newVal);
    },
    {
      immediate: true,
    },
  );
</script>
