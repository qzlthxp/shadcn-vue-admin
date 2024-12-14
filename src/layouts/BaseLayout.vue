<template>
  <SidebarProvider>
    <AppSidebar></AppSidebar>
    <SidebarInset class="overflow-hidden">
      <header
        class="relative flex items-center pl-2 gap-2 h-12 bg-background border-b shrink-0 transition-[width,height] ease-linear"
      >
        <SidebarTrigger />
        <Separator orientation="vertical" class="h-4" />
        <ScrollArea class="group flex-1 whitespace-nowrap">
          <div class="flex items-center h-10 space-x-2">
            <TagBar />
            <div class="w-6 h-full"></div>
          </div>
          <ScrollBar
            class="opacity-0 group-hover:opacity-100 transition-opacity"
            orientation="horizontal"
            forceMount
          />
        </ScrollArea>
        <div
          class="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-r from-background/10 to-background"
        ></div>
      </header>
      <div class="h-[calc(100vh_-_3rem)] overflow-auto">
        <RouterView v-slot="{ Component }">
          <Transition name="baselayout-fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
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
  import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
  import { Separator } from '@/components/ui/separator';
  import AppSidebar from './components/AppSidebar.vue';
  import TagBar from '@/components/tag-bar/Index.vue';
</script>
