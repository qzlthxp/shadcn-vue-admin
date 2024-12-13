<template>
  <template v-if="!item.children?.length">
    <SidebarMenuItem>
      <SidebarMenuButton
        :is-active="activeMenu === item.meta.key"
        class="data-[active=true]:bg-transparent"
        @click="updateRouter(item)"
      >
        <component :is="item.meta.icon || AlignJustify" />
        {{ item.meta.title }}
      </SidebarMenuButton>
    </SidebarMenuItem>
  </template>

  <template v-else>
    <Collapsible
      as-child
      :open="openMenu.has(item.meta.key)"
      class="group/collapsible"
      @update:open="updateOpenMenu(item, !openMenu.has(item.meta.key))"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger as-child>
          <SidebarMenuButton>
            <component :is="item.meta.icon || AlignJustify" />
            <span>{{ item.meta.title }}</span>
            <ChevronRight
              class="ml-auto transition-transform duration-200"
              :class="[openMenu.has(item.meta.key) ? 'rotate-90' : '']"
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <AppSidebarMenuItem
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              :item="subItem"
              :path="[...path, subItem.path]"
            ></AppSidebarMenuItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  </template>
</template>

<script setup>
  import { ChevronRight, AlignJustify } from 'lucide-vue-next';
  import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from '@/components/ui/collapsible';
  import {
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
  } from '@/components/ui/sidebar';
  import { inject } from 'vue';
  import { useRouter } from 'vue-router';

  const props = defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
    path: {
      type: Array,
      default: () => [],
    },
  });

  const router = useRouter();

  const { activeMenu, openMenu, updateActiveMenu, updateOpenMenu } =
    inject('menuState');

  const updateRouter = (menu) => {
    updateActiveMenu(menu);
    updateOpenMenu(menu);
    router.push({
      path: `/${props.path.join('/')}`,
    });
  };
</script>
