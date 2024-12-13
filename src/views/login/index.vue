<template>
  <div @click="handleLogin"> 登录 </div>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { login } from '@/api/login';
  import { USER_TOKEN } from '@/utils/key';

  const router = useRouter();
  const route = useRoute();

  const handleLogin = async () => {
    const { token } = (await login()).data;
    localStorage.setItem(USER_TOKEN, token);
    const { originPath = '/', ...query } = route.query;
    router.push({
      path: originPath,
      query,
    });
  };
</script>
