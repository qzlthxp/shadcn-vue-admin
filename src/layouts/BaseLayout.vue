<template>
  <SidebarProvider>
    <AppSidebar></AppSidebar>
    <SidebarInset>
      <header
        class="flex h-12 bg-background border-b shrink-0 items-center gap-2 transition-[width,height] ease-linear"
      >
        <div class="flex items-center gap-2 px-2">
          <SidebarTrigger />
          <Separator orientation="vertical" class="h-4" />
        </div>
      </header>
      <div class="h-[calc(100vh_-_3rem)] overflow-auto">
        <RouterView></RouterView>
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup>
  import {
    SidebarProvider,
    SidebarTrigger,
    SidebarInset,
  } from '@/components/ui/sidebar';
  import { Separator } from '@/components/ui/separator';
  import AppSidebar from './components/AppSidebar.vue';
</script>
