<script setup lang="ts">
// import SwiperCom from '@/components/SwiperCom.vue';
import CoachList from '@/components/CoachList.vue';
</script>

<template>
  <div class="main-container">
    <nut-cell>
      <div class="text-container">
        <p>摆球48/小时</p>
        <p>初级助教68/小时</p>
        <p>中级助教88/小时</p>
        <p>高级助教108/小时</p>
        <p>
          注意：超过一小时后，例1小时30分钟算2小时价格 1小时后到1小时30分钟前，溢出时间价格减半算
          注意事项：绿色助教，不提供🔞和“外带”行为出现。 不得与助教赌博，私带外出以及猥亵助教
        </p>
      </div>
    </nut-cell>
    <main>
      <CoachList />
    </main>
  </div>
</template>

<style>
.main-container {
  padding: 0 16px;
}
.text-container {
  display: flex;
  flex-direction: column;
}
p {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
</style>
