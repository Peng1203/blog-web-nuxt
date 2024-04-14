<template>
  <div
    flex
    class="preview-container"
  >
    <!-- :theme="" -->
    <MdPreview
      flex3
      :editorId="editorId"
      :modelValue="item.content"
    />
    <!-- :formatCopiedText="formatCopiedText" -->
    <div flex1>
      <MdCatalog
        :editorId="editorId"
        :scrollElementOffsetTop="20"
      />
      <!-- :scrollElement="previewRef" -->
    </div>

    <el-affix :offset="10"></el-affix>
  </div>
</template>

<script setup lang="ts">
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import type { Article } from 'types/article';

defineProps<{
  item: Article;
}>();

const editorId = ref('my-editor');

const previewRef = ref(document.documentElement);

const formatCopiedText = (text: string) => {
  return `${text} \n from Peng的小站`;
};
</script>

<style scoped lang="scss">
.preview-container {
  position: relative;
}
</style>
