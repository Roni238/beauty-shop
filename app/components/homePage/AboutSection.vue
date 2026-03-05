<script setup lang="ts">
</script>

<template>
  <section class="about">
    <div class="about__container">
      <div class="about__content">
        <h2 class="about__heading">The Payot Philosophy</h2>
        <p class="about__text">
          For over a century, Payot has been at the forefront of French haute cosmétique, 
          blending scientific innovation with natural ingredients to create exceptional 
          skincare experiences. Our heritage is rooted in the belief that every woman 
          deserves to feel confident and beautiful in her own skin.
        </p>
        <p class="about__text">
          Explore our blog for expert advice, product insights, and the latest beauty 
          trends from our team of skincare professionals.
        </p>
      </div>
      
      <img src="/Frame-7586-2.png" alt="Payot heritage" class="about__image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
    padding-top: 40px;

    @include tablet {
      padding-top: 80px;
    }

    @include laptop {
      padding-top: 120px;
    }

    &__container {
      display: flex;
      flex-direction: column-reverse;

      @include container;
      @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 40px;
        
        .about__content {
          order: 2;
        }
        
        .about__image {
          order: 1;
        }
      }
    }

    &__content {
      margin: auto;
      padding-top: 40px;

      @include tablet {
        padding-top: 0px;
      }
    }

    &__heading {
      margin-bottom: 40px;
      color: $black-color;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 80px;
        height: 4px;
        background-color: $pink-color;
      }
    }

    &__text {
      font-size: 18px;
      line-height: 1.6;
      color: $gray-3-color;
      margin-bottom: 24px;

      @include tablet {
        font-size: 20px;
      }
    }

    &__image {
      aspect-ratio: 1 / 1;
      width: 100%;
      object-fit: cover;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);

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
