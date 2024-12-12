<script setup>
  import { cn } from '@/lib/utils';
  import { Primitive } from 'radix-vue';

  const props = withDefaults(
    defineProps({
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
    }),
    {},
  );
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
