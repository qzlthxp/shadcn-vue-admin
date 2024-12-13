<script setup>
  import { cn } from '@/lib/utils';
  import { Primitive } from 'radix-vue';
  import { sidebarMenuButtonVariants } from './index';

  const props = defineProps({
    as: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'default',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    class: {
      type: null,
      default: null,
    },
    asChild: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <Primitive
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
    :as="as"
    :as-child="asChild"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
focus-visible:ring-2 active:bg-sidebar-accent
active:text-sidebar-accent-foreground disabled:pointer-events-none
disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50
data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium
data-[active=true]:text-sidebar-accent-foreground
data-[state=open]:hover:bg-sidebar-accent
data-[state=open]:hover:text-sidebar-accent-foreground
