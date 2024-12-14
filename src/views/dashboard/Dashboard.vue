<template>
  <div class="p-4 h-full flex flex-col space-y-4 xl:overflow-hidden">
    <Cards />
    <div class="flex-1">
      <Chart class="min-h-80 h-full" />
    </div>
  </div>
</template>

<script setup>
  import Cards from './components/Cards.vue';
  import Chart from './components/Chart.vue';
</script>
