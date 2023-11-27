<template>
  <div class="weather-now">
    <h2 v-if="loading">Loading...</h2>
    <h4>Погода на данный момент:</h4>
    <p>Температура в {{ cityName }}:</p>
    <h4>{{ temperature }}</h4>
    <p>Ощущается как:</p>
    <h4>{{ feelsLike }}</h4>
    <h4>Минимальная температура: {{ tempMin }}</h4>
    <h4>Максимальная температура: {{ tempMax }}</h4>
    <h4>Давление: {{ pressure }}</h4>
    <h4>Влажность: {{ humidity }} %</h4>
    <h4>Видимость: {{ visibility }}м</h4>
    <h4>Скорость ветра: {{ windSpeed }} м/с</h4>
    <h4>Градус ветра: {{ windDegree }}</h4>
    <h4>Порыв ветра: {{ windGust }} м/с</h4>
    <h4>Облачность: {{ clouds }} %</h4>
    <h4>Последнее время обновления: {{ updateTime }}</h4>
    <h4>Погода: {{ description }}</h4>
    <h4>icon: {{ icon }}</h4>
    <img :src="getIcon" alt="" />
    <h4>Рассвет: {{ sunrise }}</h4>
    <h4>Закат: {{ sunset }}</h4>
  </div>
</template>

<script></script>

<style scoped></style>