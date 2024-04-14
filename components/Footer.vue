<template>
  <div
    h-full
    flex-c-c
  >
    <NuxtLink to="https://beian.miit.gov.cn">
      {{ icp }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const icp = ref<string>('豫ICP备2023037704号');
</script>

<style scoped lang="scss"></style>
