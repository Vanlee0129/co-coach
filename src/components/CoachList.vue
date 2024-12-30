<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { queryOnlineUser } from '@/services/user';

interface User {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  status: string;
}

const router = useRouter();

const list = ref<User[]>([]);

const goDetail = () => {
  // router.push({ name: 'about' });
};

const typeMap: {
  [key: string]: string;
} = {
  primary: '初级助教',
  middle: '中级助教',
  senior: '高级助教',
};

onMounted(async () => {
  const res = await queryOnlineUser();
  if (res.success) {
    list.value = res.data || [];
  }
});
</script>

<template>
  <div>
    <div v-for="(user, index) in list" :key="index">
      <nut-cell title="Title" desc="Description" @click="goDetail" center>
        <div class="cell-container">
          <p class="user-name">{{ user.name }} - {{ typeMap[user.type] }}</p>
          <nut-image :src="user.imageUrl" width="100%" height="400px" />
        </div>
      </nut-cell>
    </div>
  </div>
</template>

<style>
.cell-container {
  width: 100%;
}
.user-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
