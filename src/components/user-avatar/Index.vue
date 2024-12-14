<template>
  <Avatar>
    <AvatarImage :src="userStore.avatar" :alt="userStore.name" />
    <AvatarFallback class="rounded-lg">
      {{ avatarFallback }}
    </AvatarFallback>
  </Avatar>
</template>

<script setup>
  import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
  import { computed } from 'vue';
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();

  const avatarFallback = computed(() => userStore.name.slice(-2).toUpperCase());
</script>
