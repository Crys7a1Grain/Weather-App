<template>
  <div>
    <div v-if="currentWeatherJSON">
      <p>JSON данные:</p>
      <pre>{{ currentWeatherJSON }}</pre>
    </div>
    <div v-if="forecastWeatherJSON">
      <p>JSON данные:</p>
      <pre>{{ forecastWeatherJSON }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentWeatherJSON: String,
    forecastWeatherJSON: String,
  },
};
</script>

<style scoped></style>
