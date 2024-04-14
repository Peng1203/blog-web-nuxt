<template>
  <el-card
    ma
    mt2
    mb2
    class="article-item-container"
  >
    <template #header>
      <div class="card-header">
        <h2>{{ item.title }}</h2>
        <div text-xs>
          {{ formateDate(item.createTime) }}
          <!-- {{ formateDate(item.updateTime) }} -->
        </div>

        <div font-size-3>
          {{ item.content.length }}
        </div>
      </div>
    </template>

    <div
      class="summary-container"
      v-if="item.summary"
    >
      {{ item.summary }}
    </div>
    <span
      v-else
      bg-black
      hover:color-white
      transition-duration-200
    >
      这个懒b居然什么都没写 !?
    </span>

    <template #footer>
      <div flex-sb-c>
        <!-- 分类 -->
        <div>{{ item?.category?.categoryName || '--' }}</div>

        <!-- 标签 -->
        <div>
          <el-tag v-for="tag of item.tags">
            {{ tag.tagName }}
          </el-tag>
        </div>
      </div>
    </template>
  </el-card>
</template>

<script setup lang="ts">
import type { Article } from 'types/article';

defineProps<{
  item: Article;
}>();
</script>

<style scoped lang="scss">
.article-item-container {
  max-width: var(--article-item-max-w);

  .card-header {
    text-align: center;
  }
}
</style>
