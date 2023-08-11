<template>
  <div>
    <div v-if="currentWeatherLink">
      <p>Сгенерированная current openweather API ссылка:</p>
      <code>{{ currentWeatherLink }}</code>
    </div>
    <div v-if="forecastWeatherLink"> 
      <p>Сгенерированная forecast openweather API ссылка:</p>
      <code>{{ forecastWeatherLink }}</code>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentWeatherLink: String,
    forecastWeatherLink: String,
  },
};
</script>

<style scoped></style>
