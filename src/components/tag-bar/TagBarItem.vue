<template>
  <ContextMenu>
    <ContextMenuTrigger @click="$emit('redirect')">
      <div
        class="flex items-center border px-1 py-[2px] rounded-sm cursor-pointer"
      >
        <component
          v-if="tag.meta.icon"
          :is="tag.meta.icon"
          :class="['h-4', isActive ? 'text-primary' : 'text-accent-foreground']"
        />
        <span
          :class="[
            'text-sm',
            isActive ? 'text-primary' : 'text-accent-foreground',
          ]"
        >
          {{ tag.meta.title }}
        </span>
        <CircleX
          v-if="!tag.meta.fixed"
          class="h-4 hover:text-destructive"
          @click.stop="$emit('remove')"
        />
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem :disabled="!close" @click="$emit('refresh')">
        <RotateCw class="h-4" />
        刷新页面
      </ContextMenuItem>
      <ContextMenuItem :disabled="!isActive" @click="$emit('remove')">
        <X class="h-4" />
        关闭
      </ContextMenuItem>
      <ContextMenuItem :disabled="!closeOther" @click="$emit('remove-other')">
        <UnfoldHorizontal class="h-4" />
        关闭其他
      </ContextMenuItem>
      <ContextMenuItem :disabled="!closeRight" @click="$emit('remove-right')">
        <ArrowRightFromLine class="h-4" />
        关闭右侧
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup>
  import {
    ContextMenu,
    // ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    // ContextMenuLabel,
    // ContextMenuRadioGroup,
    // ContextMenuRadioItem,
    // ContextMenuSeparator,
    // ContextMenuShortcut,
    // ContextMenuSub,
    // ContextMenuSubContent,
    // ContextMenuSubTrigger,
    ContextMenuTrigger,
  } from '@/components/ui/context-menu';
  import {
    RotateCw,
    CircleX,
    X,
    ArrowRightFromLine,
    UnfoldHorizontal,
  } from 'lucide-vue-next';

  defineProps({
    tag: {
      type: Object,
      default: () => ({}),
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    close: {
      type: Boolean,
      default: false,
    },
    closeOther: {
      type: Boolean,
      default: false,
    },
    closeRight: {
      type: Boolean,
      default: false,
    },
  });

  defineEmits([
    'refresh',
    'redirect',
    'remove',
    'remove-other',
    'remove-right',
  ]);
</script>
