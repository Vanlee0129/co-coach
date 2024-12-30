<template>
  <nut-image :src="url" width="100%" height="300" />
  <div class="content-container">
    <nut-space direction="vertical" fill>
      <p>推荐指数</p>
      <nut-rate v-model="value" readonly />
      <nut-cell>
        <div>这是介绍</div>
      </nut-cell>
    </nut-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const url =
  'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg';
const value = ref(5);
</script>

<style>
.content-container {
  padding: 16px 16px 0;
}
</style>
