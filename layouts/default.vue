<template>
  <!-- h-full -->
  <el-container w-full>
    <el-header>
      <NavHeader />
    </el-header>

    <el-main
      ma
      w-full
      xl-max-w-screen-xl
    >
      <slot />
    </el-main>

    <!-- 回到顶部 -->
    <el-backtop
      :right="100"
      :bottom="100"
    />

    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.el-main {
  background-color: rgba(255, 0, 0, 0.1);
}
</style>
