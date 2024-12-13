<template>
  <SidebarGroup>
    <SidebarMenu>
      <AppSidebarMenuItem
        v-for="(menu, index) in menus"
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
  import { ref, watch, provide } from 'vue';

  const props = defineProps({
    accordion: {
      type: Boolean,
      default: false,
    },
  });

  const router = useRouter();

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
