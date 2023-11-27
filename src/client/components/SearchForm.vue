<template>
  <div class="SearchPage">
    <form @submit.prevent="fetchData">
      <div>Введите название города:</div>
      <input type="text" v-model="cityName" required />
      <button type="submit">Поиск</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

let API_KEY;

if (typeof process !== 'undefined') {
  // Код выполняется на сервере (например, в среде Node.js)
  API_KEY = process.env.OPENWEATHER_API_KEY;
  //console.log('API_KEY: ' + API_KEY);
} else if (typeof import.meta !== 'undefined') {
  // Код выполняется в браузере
  API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  //console.log('API_KEY: ' + API_KEY);
}

export default {
  data() {
    return {
      cityName: '',
      loading: false,
      currentWeatherJSON: null,
      forecastWeatherJSON: null,
      currentWeatherData: null,
      forecastWeatherData: null,
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      const currentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;
      const forecastWeatherLink = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;

      const currentWeatherRequest = axios.get(currentWeatherLink);
      const forecastWeatherRequest = axios.get(forecastWeatherLink);

      Promise.all([currentWeatherRequest, forecastWeatherRequest])
        .then((responses) => {
          this.loading = false;
          console.log(responses);
          this.currentWeatherJSON = JSON.stringify(responses[0].data, null, 2);
          this.forecastWeatherJSON = JSON.stringify(responses[1].data, null, 2);

          this.currentWeatherData = responses[0].data;
//          this.temperature = currentWeatherData.main.temp;
//          this.feelsLike = currentWeatherData.main.feels_like;
//          this.tempMin = currentWeatherData.main.temp_min;
//          this.tempMax = currentWeatherData.main.temp_max;
//          this.pressure = currentWeatherData.main.pressure;
//          this.humidity = currentWeatherData.main.humidity;
//          this.visibility = currentWeatherData.visibility;
//          this.windSpeed = currentWeatherData.wind.speed;
//          this.windDegree = currentWeatherData.wind.deg;
//          this.windGust = currentWeatherData.wind.gust;
//          this.clouds = currentWeatherData.clouds.all;
//          this.updateTime = new Date(
//            currentWeatherData.dt * 1000,
//          ).toLocaleTimeString();
//          this.description = currentWeatherData.weather[0].description;
//          this.icon = currentWeatherData.weather[0].icon;
//          this.sunrise = new Date(
//            currentWeatherData.sys.sunrise * 1000,
//          ).toLocaleTimeString();
//          this.sunset = new Date(
//            currentWeatherData.sys.sunset * 1000,
//          ).toLocaleTimeString();

          this.forecastWeatherData = responses[1].data.list;
          
          this.$emit('weatherData', {
            loading: this.loading,
            currentWeatherData: this.currentWeatherData,
            forecastWeatherData: this.forecastWeatherData,
          });
        })
        .catch((error) => {
          alert(
            'Произошла ошибка, попробуйте повторить запрос или изменить название локации, ошибка: ' +
              error,
          );
          console.log('Ошибка запроса:', error);
        });
    },
  }
}
</script>

<style scoped>

</style>