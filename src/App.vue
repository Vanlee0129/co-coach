<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderMenu from './layouts/HeaderMenu.vue';
// import { userLogin } from '@/services/auth';
import { ref, onMounted } from 'vue';

const isLogin = ref(true);

// onMounted(async () => {
//   const res = await userLogin();
//   if (res.success) {
//     isLogin.value = true;
//   }
// });
</script>

<template>
  <h2 v-if="!isLogin" class="page-loading">加载中...</h2>
  <div v-else>
    <HeaderMenu></HeaderMenu>
    <RouterView />
  </div>
</template>

<style>
.page-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
