<script setup lang="ts">
import { usePagination } from '@/composables/usePagination';

const { data: articles } = await useAsyncData('articles', () => 
  queryCollection('articles').select('id', 'title', 'preview', 'image', 'createdAt').order('createdAt', 'DESC').all()
)

const itemsPerPage = ref(4)
itemsPerPage.value = window.innerWidth >= 1280 ? 8 : window.innerWidth >= 768 ? 4 : window.innerWidth >= 640 ? 2 : 1

const { 
  currentPage, 
  paginatedItems: paginatedPosts,
  nextPage,
  goToPage,
  visiblePages 
} = usePagination(computed(() => articles.value || []), itemsPerPage, 5);

const getArticleId = (path: string) => {
  if (!path) return ''
  
  return path
    .replace('articles/articles/', '')
    .replace('.json', '')
}
</script>

<template>
  <section class="articles" aria-labelledby="articles-heading">
    <div class="articles__container">
    <div class="articles__header">
      <h2 id="articles-heading">Latest Insights</h2>
      <p class="articles__subtitle">Expert advice, beauty tips, and skincare innovations</p>
    </div>
    <div class="articles__grid">
      <article class="article" v-for="post in paginatedPosts" :key="post.id" :title="post.preview">
        <NuxtImg 
          class="article__image" 
          :src="post.image" 
          :alt="post.title || 'Post image'"
          placeholder="/default-image.webp"
          fallback="/default-image.webp"
          width="280"
          height="280"
          loading="lazy"/>
        <h3 class="article__title">{{ post.title }}</h3>
        <NuxtLink class="article__link" :to="`/articles/${getArticleId(post.id)}`" :aria-label="`Read more about ${post.title}`">Read more</NuxtLink>
      </article>
    </div>

    <div class="article__pagination pagination">
      <button class="pagination__page" :class="{ 'pagination__page--active': pageNumber === currentPage }"  
        v-for="pageNumber in visiblePages" :key="pageNumber"
        @click="goToPage(pageNumber)"
        >
        {{ pageNumber }}
      </button>

      <button class="pagination__next-btn" @click="nextPage" aria-label="Next articles">
        <IconsArrow aria-hidden="true"/>
      </button>
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .articles{
    margin-bottom: 140px;
    padding-top: 40px;

    @include tablet {
      padding-top: 80px;
    }

    @include laptop {
      padding-top: 120px;
    }

    &__container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      @include container;
    }

    &__header {
      text-align: center;
    }

    &__subtitle {
      font-size: 18px;
      color: $gray-2-color;
      margin-top: 20px;

      @include tablet {
        font-size: 24px;
      }
    }

    &__grid{
      display: grid;
      margin-inline: auto;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 40px;
      width: 100%;
      margin-top: 59px;
      justify-content: center;
      
      @include tablet {
        grid-template-columns: repeat(2, auto);
      }
      
      @include laptop {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }

  .article{
    cursor: pointer;
    max-height: 396px;
    transition: transform 0.2s ease;
    margin-inline: auto;
    
    &:hover{
      transform: translateY(-20px);

      .article__link{
        opacity: 1;
      }
    }
    
    &__image{
      height: 280px;
      width: 280px;
      object-fit: cover;
      margin-bottom: 24px;
    }

    &__title{
      font-size: 18px;

      @include tablet {
        font-size: 24px;
      }
    }

    &__link{
      font-size: 18px;
      color: $pink-color;
      opacity: 0;
      margin-top: 12px;

      @include tablet {
        font-size: 24px;
      }
    }
    
    &__pagination{
      margin-top: 32px;
    }
  }
  

  .pagination{
    display: flex;
    gap: 16px;

    &__page{
      height: 56px;
      width: 56px;
      border: none;
      border-radius: 12px;
      background-color: $gray-1-color;
      color: $black-color;
      font-size: 14px;
      padding: 0;

      @include tablet {
        font-size: 16px;
      }

      &:hover:not(&--active){
        background-color: #E8E8E8;
      }

      &--active{
        color: $white-color;
        background-color: $black-color;
      }
    }

    &__next-btn{
      background: none;
      height: 56px;
      width: 56px;
      border: 1px solid #E8E8E8;
      border-radius: 12px;
      transition: background-color 0.2s ease;
      padding: 0;

      &:hover{
        background-color: #E8E8E8;
      }
    }
  }
</style>
