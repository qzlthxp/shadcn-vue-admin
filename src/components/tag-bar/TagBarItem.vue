<template>
  <ContextMenu>
    <ContextMenuTrigger @click="$emit('redirect')">
      <div
        class="flex items-center gap-[2px] border p-1 rounded-sm cursor-pointer"
      >
        <component
          v-if="tag.meta.icon"
          :is="tag.meta.icon"
          :class="['h-4 w-4', isActive ? '' : 'text-slate-400']"
        />
        <span
          :class="[
            'text-xs',
            isActive ? 'font-bold text-primary' : ' text-slate-400',
          ]"
        >
          {{ tag.meta.title }}
        </span>
        <div
          v-if="!tag.meta.fixed"
          :class="[
            'rounded hover:bg-destructive/10 hover:text-destructive',
            isActive ? '' : 'text-secondary',
          ]"
        >
          <X class="h-4 w-4" @click.stop="$emit('remove')" />
        </div>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem :disabled="!isActive" @click="$emit('refresh')">
        <RotateCw class="h-4 -ml-1" />
        刷新页面
      </ContextMenuItem>
      <ContextMenuItem :disabled="!close" @click="$emit('remove')">
        <X class="h-4 -ml-1" />
        关闭
      </ContextMenuItem>
      <ContextMenuItem :disabled="!closeOther" @click="$emit('remove-other')">
        <UnfoldHorizontal class="h-4 -ml-1" />
        关闭其他
      </ContextMenuItem>
      <ContextMenuItem :disabled="!closeRight" @click="$emit('remove-right')">
        <ArrowRightFromLine class="h-4 -ml-1" />
        关闭右侧
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<script setup>
  import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
  } from '@/components/ui/context-menu';
  import {
    RotateCw,
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
