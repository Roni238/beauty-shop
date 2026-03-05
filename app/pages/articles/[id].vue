//можно добавить лоадер и отображать блок по условию и не использовать "?."
<template>
    <article class="article-page">
      <h1 class="article-page__title"> {{ article?.title }} </h1>

      <NuxtImg 
        class="article-page__image"
        :src="article?.image" 
        :alt="article?.title || 'Post image'"
        placeholder="/default-image.webp"
        fallback="/default-image.webp"
        width="1216"
        height="700"
        loading="lazy"/>

        <div class="article-page__text">
          <p class="article-page__about">About</p>
          <h4 class="article-page__discription">{{ article?.description }}</h4>
        </div>
    </article>
</template>

<script setup lang="ts">
const route = useRoute()
const articleId = route.params.id

const { data: article }= await useAsyncData(`article-${articleId}`, () => 
  queryCollection('articles')
    .where('id', '=', `articles/articles/${route.params.id}.json`) // Поиск по полю id
    .first()
)

</script>

<style lang="scss" scoped>
  .article-page{
    @include container;

    &__title{
      margin-bottom: 33px;
    }

    &__image{
      margin-block: 40px 80px;
      max-width: 100%;
    }

    &__discription{
      margin-top: 32px;
      max-width: 695px;
    }
  }
</style>