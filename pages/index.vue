<template>
  <main
    w-full
    h-full
  >
    <div class="articles-container">
      <template
        :key="item.id"
        v-for="item of articleList"
      >
        <ArticleItem :item="item" />
      </template>
    </div>

    <el-pagination
      flex-c-c
      :total="total"
      v-model:current-page="page"
      v-model:page-size="pageSize"
      layout="prev, pager, next"
      @change="handlePagerChange"
      @current-change="handlePagerChange"
    />
  </main>
</template>

<script setup lang="ts">
import type { Article } from 'types/article';
import type { ResponseListData } from 'types/global';

const articleList = ref<Article[]>([]);

let { page, pageSize, column, order, total } = useListState();

const getArticles = async () => {
  try {
    const params = {
      page,
      pageSize,
      authorId: 0,
      categoryId: 0,
      tagId: 0,
      column,
      order,
    };
    const { data: res } = await useRequest<ResponseListData<Article>>({
      url: '/article',
      method: 'GET',
      params,
    });

    const { code, success, data } = res;
    if (code !== 20000 || !success) return;
    articleList.value = data.list;
    total = data.total;
  } catch (e) {
    console.log('e', e);
  }
};

await getArticles();

const handlePagerChange = (newPage: number) => {
  page = newPage;
  getArticles();
};
</script>

<style scoped lang="scss"></style>
