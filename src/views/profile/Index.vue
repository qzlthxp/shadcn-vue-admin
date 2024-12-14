<template>
  <div class="py-10 max-w-2xl mx-auto">
    <div class="flex items-end gap-2">
      <UserAvatar class="h-32 w-32 rounded" />
      <span class="font-bold">
        {{ userStore.name }}
      </span>
    </div>
  </div>
</template>

<script setup>
  import UserAvatar from '@/components/user-avatar/Index.vue';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
</script>
