<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            @click="$router.push({ name: 'dashboard' })">
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <Avatar class="h-full w-full rounded-lg">
                <AvatarImage src="/favicon.png" />
              </Avatar>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold"> shadcn-vue-admin </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <AppSidebarMenu />
    </SidebarContent>
    <SidebarFooter class="border-t">
      <AppSidebarUser />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<script setup>
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import AppSidebarUser from './AppSidebarUser.vue';
import AppSidebarMenu from './AppSidebarMenu.vue';
</script>
