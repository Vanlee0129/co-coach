<template>
  <nut-navbar title="共享助教" @click-back="onClick" :left-show="showBack"></nut-navbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const showBack = ref(false);
const router = useRouter();
const route = useRoute();

watch(
  () => route.name,
  async (newName) => {
    if (newName !== 'home') {
      showBack.value = true;
    } else {
      showBack.value = false;
    }
  },
);

const onClick = () => {
  router.back();
};
</script>
