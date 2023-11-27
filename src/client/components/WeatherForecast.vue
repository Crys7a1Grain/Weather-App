<template>
  <div class="weather-forecast">
    <h2>Прогноз на 5 дней на каждые 3 часа:</h2>
    <div v-for="forecast in forecastWeatherData">
      <h4>{{ formatDate(forecast.dt) }}</h4>
      <p>Температура: {{ forecast.main.temp }}°C</p>
      <p>Погода: {{ forecast.weather[0].description }}</p>
      <p>Ощущается как: {{ forecast.main.feels_like }}</p>
      <p>Влажность: {{ forecast.main.humidity }} %</p>
      <p>Давление: {{ forecast.main.pressure }}</p>
      <p>Максимальная температура: {{ forecast.main.temp_max }}</p>
      <p>Минимальная температура: {{ forecast.main.temp_min }}</p>
      <img
        :src="
          `https://openweathermap.org/img/wn/` + forecast.weather[0].icon + '@2x.png'
        "
        alt=""
      />
      <p>Облачность: {{ forecast.clouds.all }} %</p>
      <p>Скорость ветра: {{ forecast.wind.speed }} м/c</p>
      <p>Градус ветра: {{ forecast.wind.deg }}</p>
      <p>Порывы ветра: {{ forecast.wind.gust }} м/c</p>
      <p>Видимость: {{ forecast.visibility }}м</p>
      <p>Вероятность осадков: {{ forecast.pop * 100 }}%</p>
      <p>-----------------------------------------------</p>
    </div>
  </div>
</template>

<script></script>

<style scoped></style>
