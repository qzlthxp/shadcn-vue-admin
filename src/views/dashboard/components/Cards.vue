<template>
  <div>
    <div
      class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
    >
      <div class="flex-1 p-3 border rounded-lg">
        <header class="flex justify-between items-center">
          <span>总收入</span>
          <Wallet class="h-4" stroke-width="1px" />
        </header>
        <p class="my-4 font-bold text-3xl"> ${{ cards.revenue.number }} </p>
        <div class="flex items-end">
          <span class="text-muted-foreground text-sm"> 较上月： </span>
          <TrendingUp
            v-if="cards.revenue.isUp"
            class="text-green-500 h-6 -rotate-[10deg]"
          />
          <TrendingDown v-else class="text-destructive h-6 -rotate-[10deg]" />
          {{ cards.revenue.up }}
        </div>
      </div>

      <div class="flex-1 p-3 border rounded-lg">
        <header class="flex justify-between items-center">
          <span>订阅人数</span>
          <Users class="h-4" stroke-width="1px" />
        </header>
        <p class="my-4 font-bold text-3xl">
          +{{ cards.subscriptions.number }}
        </p>
        <div class="flex items-end">
          <span class="text-muted-foreground text-sm"> 较上月： </span>
          <TrendingUp
            v-if="cards.subscriptions.isUp"
            class="text-green-500 h-6 -rotate-[10deg]"
          />
          <TrendingDown v-else class="text-destructive h-6 -rotate-[10deg]" />
          {{ cards.subscriptions.up }}
        </div>
      </div>

      <div class="flex-1 p-3 border rounded-lg">
        <header class="flex justify-between items-center">
          <span>取关人数</span>
          <UserX class="h-4" stroke-width="1px" />
        </header>
        <p class="my-4 font-bold text-3xl"> {{ cards.unfollow.number }} </p>
        <div class="flex items-end">
          <span class="text-muted-foreground text-sm"> 较上月： </span>
          <TrendingUp
            v-if="cards.unfollow.isUp"
            class="text-green-500 h-6 -rotate-[10deg]"
          />
          <TrendingDown v-else class="text-destructive h-6 -rotate-[10deg]" />
          {{ cards.unfollow.up }}
        </div>
      </div>

      <div class="flex-1 p-3 border rounded-lg">
        <header class="flex justify-between items-center">
          <span>当前活跃</span>
          <Activity class="h-4" stroke-width="1px" />
        </header>
        <p class="my-4 font-bold text-3xl"> {{ cards.active.number }} </p>
        <div class="flex items-end">
          <span class="text-muted-foreground text-sm"> 较上月： </span>
          <TrendingUp
            v-if="cards.active.isUp"
            class="text-green-500 h-6 -rotate-[10deg]"
          />
          <TrendingDown v-else class="text-destructive h-6 -rotate-[10deg]" />
          {{ cards.active.up }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    Wallet,
    Users,
    UserX,
    Activity,
    TrendingUp,
    TrendingDown,
  } from 'lucide-vue-next';

  const cards = {
    revenue: {
      number: '45,231.89',
      isUp: true,
      up: '20.6%',
    },
    subscriptions: {
      number: '2350',
      isUp: true,
      up: '180.1%',
    },
    unfollow: {
      number: '234',
      isUp: false,
      up: '19%',
    },
    active: {
      number: '573',
      isUp: true,
      up: '201',
    },
  };
</script>
