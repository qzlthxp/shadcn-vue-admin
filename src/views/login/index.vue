<template>
  <div class="h-screen w-screen bg-gradient-to-b from-blue-300 to-white">
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 max-w-96 w-full rounded-3xl border bg-white"
    >
      <img
        class="mx-auto my-10 w-10 h-10 rounded-lg object-contain"
        src="/favicon.png"
        alt="logo"
      />
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem>
            <FormLabel>账号</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="admin 或 user"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="mt-4">
            <FormLabel>密码</FormLabel>
            <FormControl>
              <Input
                type="password"
                placeholder="123456"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit" class="my-6 w-full shadow-black/50">
          登录
        </Button>
      </form>
      <Separator label="快捷登录" />
      <div class="pt-8 pb-10 flex gap-2">
        <Button
          class="w-full"
          size="sm"
          variant="outline"
          @click="handeLogin({ username: 'admin', password: 123456 })"
        >
          管理员
        </Button>
        <Button
          class="w-full"
          size="sm"
          variant="outline"
          @click="handeLogin({ username: 'user', password: 123456 })"
        >
          普通用户
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Button } from '@/components/ui/button';
  import { Input } from '@/components/ui/input';
  import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form';
  import { Separator } from '@/components/ui/separator';
  import { useForm } from 'vee-validate';
  import { useRoute, useRouter } from 'vue-router';
  import { login } from '@/api/login';
  import { USER_TOKEN } from '@/utils/key';
  import { toTypedSchema } from '@vee-validate/zod';
  import * as z from 'zod';

  const formSchema = toTypedSchema(
    z.object({
      username: z
        .string({ message: '账号不能为空' })
        .refine((value) => ['admin', 'user'].includes(value), {
          message: '账号是 admin 或 user',
        }),
      password: z.string({ message: '密码不能为空' }),
    }),
  );

  const form = useForm({
    validationSchema: formSchema,
  });

  const router = useRouter();
  const route = useRoute();

  const handeLogin = async (values) => {
    const { token } = (await login(values)).data;
    localStorage.setItem(USER_TOKEN, token);
    const { originPath = '/', ...query } = route.query;
    router.push({
      path: originPath,
      query,
      replace: true,
    });
  };

  const onSubmit = form.handleSubmit(handeLogin);
</script>
