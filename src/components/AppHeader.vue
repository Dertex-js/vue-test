<template>
  <div class="w-full h-[7vh] shadow-sm flex justify-between items-center px-[40px]">
    <div class="flex gap-[20px]">
      <h2 class="text-2xl font-bold">Тестовое</h2>
      <el-button
        v-if="route.path !== '/'"
        type="warning"
        plain
        @click="handleRouterPush('/')"
        >Назад на главную</el-button
      >
    </div>
    <div class="flex gap-[20px]">
      <el-button @click="handleRouterPush('/peoples')">Персонажи</el-button>
      <el-button @click="handleRouterPush('/favourites')">Избранное</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router"

const route = useRoute()

const handleRouterPush = (to: string) => router.push(to)
</script>
