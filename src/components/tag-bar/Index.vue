<template>
  <TagBarItem
    v-for="(tag, index) in tagStore.tags"
    :key="tag.name"
    :tag="tag"
    :is-active="tagStore.currentTagName === tag.name"
    :close="!tag.meta?.fixed"
    :close-other="
      tagStore.tags.filter((tag) => !Boolean(tag.meta.fixed)).length > 1
    "
    :close-right="index !== tagStore.tags.length - 1"
    @redirect="$router.push({ name: tag.name })"
    @remove="handleRemove(tag)"
    @removeOther="tagStore.clearTag(tag)"
    @removeRight="handleRemoveRight(index + 1)"
  ></TagBarItem>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useTagStore } from '@/store/modules/tag';
  import TagBarItem from './TagBarItem.vue';

  const tagStore = useTagStore();
  const router = useRouter();

  const redirect = () => {
    router.push({ name: 'dashboard' });
  };

  const handleRemove = (tag) => {
    const needRedirect = tagStore.removeTag(tag);
    needRedirect && redirect();
  };

  const handleRemoveRight = (index) => {
    const needRedirect = tagStore.removeStart(index);
    needRedirect && redirect();
  };
</script>
