<template>
  <el-menu
    router
    xl-max-w-screen-xl
    mode="horizontal"
    class="header-container"
    :default-active="defaultMenu"
  >
    <el-menu-item
      :index="menu.path"
      :disabled="menu.disabled"
      v-for="menu of menus"
    >
      {{ menu.text }}
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
const route = useRoute();

const defaultMenu = ref(route.path);

const menus = ref([
  {
    text: '首页',
    path: '/',
  },
  {
    text: '文章',
    path: '/article',
  },
  {
    text: '分类',
    path: '/category',
    disabled: true,
  },
  {
    text: '标签',
    path: '/tag',
    disabled: true,
  },
  {
    text: '关于',
    path: '/me',
    disabled: true,
  },
]);
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
}
.header-container {
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 99;
  width: 100%;
  height: 60px;
  background-color: pink;
  transform: translate(-50%, 0);
}
</style>
