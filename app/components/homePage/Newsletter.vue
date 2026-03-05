<script setup lang="ts">
const email = ref('')
const isSubscribed = ref(false)
const isLoading = ref(false)

const subscribe = () => {
  if (email.value) {
    isLoading.value = true
    // Simulate API call
    setTimeout(() => {
      isSubscribed.value = true
      email.value = ''
      isLoading.value = false
      setTimeout(() => {
        isSubscribed.value = false
      }, 5000)
    }, 1000)
  }
}
</script>

<template>
  <section class="newsletter">

    <div class="newsletter__container">
      <div class="newsletter__content">
        <div class="newsletter__left">
          <span class="newsletter__label-premium">Privilege Membership</span>
          <h2 class="newsletter__heading">Join the Payot Community</h2>
          <p class="newsletter__text">
            Experience the art of French skincare. Receive expert advice, exclusive access to new collections, and personalized beauty insights.
          </p>
        </div>

        <!-- Right Side: Form -->
        <div class="newsletter__right">
          <div class="newsletter__form-container">
            <form class="newsletter__form" @submit.prevent="subscribe">
              <div class="newsletter__form-header">
                <h3>Stay Connected <span>to Payot</span></h3>
                <p>Enter your email to join our beauty community</p>
              </div>

              <div class="newsletter__input-group">
                <div class="newsletter__input-wrapper">
                  <label for="email" class="newsletter__label">Email Address</label>
                  <input 
                    id="email"
                    v-model="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    class="newsletter__input"
                    :disabled="isLoading || isSubscribed"
                    required
                  />
                  <div class="newsletter__input-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                </div>

                <button 
                  type="submit" 
                  class="newsletter__btn"
                  :disabled="isLoading || isSubscribed"
                >
                  <span v-if="isLoading" class="newsletter__btn-loading">
                    <svg class="newsletter__spinner" viewBox="0 0 24 24">
                      <circle class="newsletter__spinner-path" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="60" stroke-dashoffset="0"/>
                    </svg>
                  </span>
                  <span v-else-if="isSubscribed">
                    Welcome to Payot
                  </span>
                  <span v-else>
                    Subscribe
                  </span>
                </button>
              </div>

              <div class="newsletter__success-message" v-if="isSubscribed">
                <div class="newsletter__success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p>Welcome to Payot. Please check your email to confirm your subscription.</p>
              </div>

              <p class="newsletter__privacy">
                Your information is protected. Read our <a href="/">Privacy Policy</a>. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .newsletter {
    padding-top: 40px;

    @include tablet {
      padding-top: 80px;
    }

    @include laptop {
      padding-top: 120px;
    }

    &__container {
      @include container;
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: auto;
      padding-block: 32px;
      padding-inline: 20px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;

      @include tablet {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
        align-items: center;
      }
    }

    &__left {
      margin: auto;
      padding-top: 40px;

      @include tablet {
        padding-top: 0;
        padding-right: 20px;
      }
    }

    &__label-premium {
      display: inline-block;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: $black-color;
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid $pink-color;
      background: linear-gradient(90deg, transparent 0%, rgba(226, 190, 255, 0.2) 50%, transparent 100%);
    }

    &__heading {
      font-size: 28px;
      font-weight: 300;
      line-height: 1.3;
      margin-bottom: 20px;
      color: $black-color;

      @include tablet {
        font-size: 42px;
      }
    }

    &__text {
      font-size: 16px;
      color: $gray-3-color;
      line-height: 1.8;
    }

    &__right {
      display: flex;
      justify-content: center;
      
      @include tablet {
        justify-content: flex-start;
      }
    }

    &__form-container {
      background: linear-gradient(135deg, $white-color 0%, #FFF5F7 100%);
      border-radius: 4px;
      padding: 32px 24px;
      width: 100%;
      max-width: 480px;
      box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
      border: 1px solid #e8e8e8;
      position: relative;

      @include tablet {
        padding: 40px 48px;
      }

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, $pink-color 0%, #D4A5FF 50%, $pink-color 100%);
        border-radius: 4px 4px 0 0;
      }
    }

    &__form {
      width: 100%;
    }

    &__form-header {
      margin-bottom: 28px;

      h3 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 6px;
        color: $black-color;

        span {
          color: $pink-color;
        }
      }

      p {
        font-size: 13px;
        color: $gray-2-color;
        line-height: 1.6;
      }
    }

    &__input-group {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    &__input-wrapper {
      position: relative;

      label {
        display: block;
        font-size: 13px;
        font-weight: 500;
        color: $gray-3-color;
        margin-bottom: 8px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
      }
    }

    &__input {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid #d0d0d0;
      border-radius: 4px;
      font-size: 14px;
      font-family: $main-font;
      transition: all 0.3s ease;
      background-color: $white-color;

      &:focus {
        outline: none;
        border-color: $pink-color;
        box-shadow: 0 0 0 3px rgba(226, 190, 255, 0.15);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &__btn {
      width: 100%;
      padding: 16px 32px;
      background: linear-gradient(135deg, $black-color 0%, #2a2a2a 100%);
      color: $white-color;
      border: none;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 500;
      font-family: $main-font;
      cursor: pointer;
      transition: all 0.3s ease;
      letter-spacing: 2px;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, $pink-color 0%, #D4A5FF 100%);
        transition: left 0.4s ease;
        opacity: 0;
      }

      &:hover:not(:disabled) {
        background: linear-gradient(135deg, $black-color 0%, #2a2a2a 100%);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

        &::before {
          left: 0;
          opacity: 1;
        }

        span {
          position: relative;
          z-index: 1;
        }
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &__spinner {
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;

      &-path {
        stroke: $pink-color;
        animation: dash 1.5s ease-in-out infinite;
      }
    }

    &__input-icon {
      display: none;
    }

    &__success-message {
      background: linear-gradient(135deg, #FFF5F7 0%, #F8E8F0 100%);
      border: 1px solid rgba(226, 190, 255, 0.3);
      border-radius: 4px;
      padding: 16px;
      text-align: center;
      margin-top: 20px;
      animation: fadeIn 0.4s ease;

      p {
        font-size: 13px;
        color: $gray-3-color;
        margin: 0;
        line-height: 1.6;
      }
    }

    &__success-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      color: $pink-color;
      animation: fadeIn 0.3s ease;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    &__privacy {
      font-size: 11px;
      color: $gray-2-color;
      margin-top: 16px;
      line-height: 1.6;
      text-align: center;

      a {
        color: $pink-color;
        text-decoration: underline;
        text-underline-offset: 2px;

        &:hover {
          color: $black-color;
        }
      }
    }
  }

  // Animations
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
