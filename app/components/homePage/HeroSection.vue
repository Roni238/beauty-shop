<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="hero__container">
        <div class="hero__content">
        <h1 class="hero__title">
            <span class="hero__title-sub">Welcome to</span>
            Payot Beauty Blog
        </h1>
        <p class="hero__subtitle">Discover the art of French skincare and timeless beauty secrets since 1920</p>
        <div class="hero__buttons">
            <button class="hero__btn hero__btn--primary">Explore Articles</button>
            <button class="hero__btn hero__btn--secondary">Our Story</button>
        </div>
        </div>

        <img src="/Frame-7586-1.png" alt="Payot beauty products" class="hero__image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .hero {
    background: linear-gradient(135deg, #FFF5F7 0%, #F8E8F0 100%);

    &__container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
      }
    }
    
    &__content {
      margin: auto;
      padding-block: 32px;
      padding-inline: 20px;
    }

    &__title {
      color: $black-color;

      &-sub {
        display: block;
        font-size: 28px;
        color: $pink-color;

        @include tablet {
          font-size: 32px;
        }
      }
    }

    &__subtitle {
      font-size: 18px;
      color: $gray-2-color;
      line-height: 1.4;
      margin-bottom: 32px;
      max-width: 500px;

      @include tablet {
        font-size: 24px;
        margin-bottom: 40px;
      }

      @include laptop {
        margin-bottom: 48px;
      }
    }

    &__buttons {
      display: flex;
      gap: 24px;
    }

    &__btn {
      border-radius: 999px;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.3s ease;
      border: 2px solid transparent;

      &--primary {
        background-color: $black-color;
        color: $white-color;

        &:hover {
          background-color: $pink-color;
          box-shadow: 0 10px 30px rgba(226, 190, 255, 0.4);
        }
      }

      &--secondary {
        background-color: transparent;
        color: $black-color;
        border-color: $black-color;

        &:hover {
          background-color: $black-color;
          color: $white-color;
        }
      }
    }

    &__image {
      aspect-ratio: 1 / 1;
      width: 100%;
      object-fit: cover;

      @include tablet {
        height: 400px;
        width: 100%;
      }

      @include laptop {
        height: 600px;
      }
    }
  }
</style>
