<template>
  <div class="py-10 max-w-2xl mx-auto">
    {{ userStore.name }}
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store/modules/user';

  const userStore = useUserStore();
</script>
