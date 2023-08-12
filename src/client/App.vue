<template>
  <div>
    <form @submit.prevent="fetchData">
      <div>Введите название города:</div>
      <input type="text" v-model="cityName" required />
      <button type="submit">Поиск</button>
    </form>

    <!-- <ApiLinks
      :currentWeatherLink="currentWeatherLink"
      :forecastWeatherLink="forecastWeatherLink"
    /> -->
    <!-- <JsonData
      :currentWeatherJSON:="currentWeatherJSON"
      :forecastWeatherJSON="forecastWeatherJSON"
    /> -->

    <div>
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

    <div>
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
            `https://openweathermap.org/img/wn/` +
            forecast.weather[0].icon +
            '@2x.png'
          "
          alt=""
        />
        <p>Облачность: {{forecast.clouds.all}} %</p>
        <p>Скорость ветра: {{forecast.wind.speed}} м/c</p>
        <p>Градус ветра: {{forecast.wind.deg}}</p>
        <p>Порывы ветра: {{forecast.wind.gust}} м/c</p>
        <p>Видимость: {{forecast.visibility}}м</p>
        <p>Вероятность осадков: {{forecast.pop * 100}}%</p>
        <p>-----------------------------------------------</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ApiLinks from './components/ApiLinks.vue';
import JsonData from './components/JsonData.vue';

export default {
  components: {
    ApiLinks,
    JsonData,
  },
  data() {
    return {
      cityName: '',
      currentWeatherLink: '',
      forecastWeatherLink: '',
      currentWeatherJSON: null,
      forecastWeatherJSON: null,
      forecastWeatherData: [],
      temperature: null,
      feelsLike: null,
      tempMin: null,
      tempMax: null,
      pressure: null,
      humidity: null,
      visibility: null,
      windSpeed: null,
      windDegree: null,
      windGust: null,
      clouds: null,
      updateTime: null,
      description: null,
      icon: '',
      sunrise: null,
      sunset: null,
    };
  },
  methods: {
    fetchData() {
      const API_KEY = process.env.API_KEY;

      this.currentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;
      this.forecastWeatherLink = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;

      const currentWeatherRequest = axios.get(this.currentWeatherLink);
      const forecastWeatherRequest = axios.get(this.forecastWeatherLink);

      Promise.all([currentWeatherRequest, forecastWeatherRequest])
        .then((responses) => {
          this.currentWeatherJSON = JSON.stringify(responses[0].data, null, 2);
          this.forecastWeatherJSON = JSON.stringify(responses[1].data, null, 2);

          const currentWeatherData = responses[0].data;
          this.temperature = currentWeatherData.main.temp;
          this.feelsLike = currentWeatherData.main.feels_like;
          this.tempMin = currentWeatherData.main.temp_min;
          this.tempMax = currentWeatherData.main.temp_max;
          this.pressure = currentWeatherData.main.pressure;
          this.humidity = currentWeatherData.main.humidity;
          this.visibility = currentWeatherData.visibility;
          this.windSpeed = currentWeatherData.wind.speed;
          this.windDegree = currentWeatherData.wind.deg;
          this.windGust = currentWeatherData.wind.gust;
          this.clouds = currentWeatherData.clouds.all;
          this.updateTime = new Date(
            currentWeatherData.dt * 1000
          ).toLocaleTimeString();
          this.description = currentWeatherData.weather[0].description;
          this.icon = currentWeatherData.weather[0].icon;
          this.sunrise = new Date(
            currentWeatherData.sys.sunrise * 1000
          ).toLocaleTimeString();
          this.sunset = new Date(
            currentWeatherData.sys.sunset * 1000
          ).toLocaleTimeString();

          this.forecastWeatherData = responses[1].data.list;
        })
        .catch((error) => {
          console.error('Ошибка запроса:', error);
          this.temperature = null;
          this.feelsLike = null;
          this.tempMin = null;
          this.tempMax = null;
          this.pressure = null;
          this.humidity = null;
        });
    },
    formatDate(unixTimestamp) {
      const dateTime = new Date(unixTimestamp * 1000);
      const datePart = dateTime.toLocaleDateString();
      const timePart = dateTime.toLocaleTimeString();
      return `${datePart} ${timePart}`;
    },
  },
  computed: {
    getIcon() {
      return `https://openweathermap.org/img/wn/${this.icon}@2x.png`;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Old+Standard+TT&family=Ubuntu:wght@400;500;700&display=swap');

* {
  font-family: 'League Gothic', sans-serif;
  font-family: 'Old Standard TT', serif;
}
</style>
