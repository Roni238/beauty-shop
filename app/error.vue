<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-title">Ошибка {{ error.statusCode }}</h1>
      
      <p class="error-message">
        {{ error.statusCode == 403 
          ? 'Упс! Похоже, у вас нет доступа к этому секретному разделу бьюти-студии.' 
          : 'Что-то пошло не так. Страница, которую вы ищете, затерялась среди новинок косметики.' 
        }}
      </p>
      

      <button class="error-button" @click="handleError">
        Вернуться на главную
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
/* Основные стили страницы, вдохновленные макетом */
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* Фон: чистый белый, как на сайте */
  background-color: #FFFFFF;
  color: #000000;
  padding: 20px;
}

.error-content {
  text-align: center;
  max-width: 600px;
}

/* Заголовок: Крупный, жирный, черный текст */
.error-title {
  font-family: 'Manrope', 'Inter', sans-serif; /* Похож на шрифт в макете */
  font-weight: 700;
  font-size: 80px; /* Очень крупный для акцента */
  margin: 0 0 20px 0;
  line-height: 1.1;
  color: #000000;
}

/* Основной текст: Тонкий, черный, с хорошим межстрочным интервалом */
.error-message {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 40px 0;
  color: #000000;
}

/* Кнопка: Скругленный черный прямоугольник с белым текстом */
.error-button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #000000;
  border: none;
  border-radius: 50px; /* Полное скругление */
  padding: 15px 35px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: capitalize; /* Как "Let's work" в хедере */
}

/* Эффект при наведении на кнопку (используем акцентный розовый) */
.error-button:hover {
  background-color: #F8D1D1; /* Пастельно-розовый цвет пудры из макета */
  color: #A34A64; /* Темно-розовый текст */
}

/* Декоративные точки в стиле UI Kit макета */
.error-visual {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 50px;
}

.dot {
  width: 12px;
  height: 12px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: transparent;
}

.dot.active {
  background-color: #000;
}
</style>