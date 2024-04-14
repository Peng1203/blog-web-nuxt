<template>
  <div>
    <ArticleDetail :item="articleItem" />
  </div>
</template>

<script setup lang="ts">
import type { Article } from 'types/article';

const route = useRoute();

const articleItem = ref<Article>({} as Article);

const getArticleDetail = async () => {
  try {
    const { data: res } = await useRequest<Article>({
      method: 'GET',
      url: `/article/${route.params.id}`,
    });
    const { code, success, data } = res;
    if (code !== 20000 || !success) return;
    articleItem.value = data;
  } catch (e) {
    console.log('e', e);
  }
};

getArticleDetail();
</script>

<style scoped lang="scss"></style>
