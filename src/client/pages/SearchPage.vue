<template>
  <Header />
  <SearchForm/>
  <WeatherNow/>
  <WeatherForecast/>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import SearchForm from '../components/SearchForm.vue';
import WeatherNow from '../components/WeatherNow.vue';
import WeatherForecast from '../components/WeatherForecast.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Header,
    SearchForm,
    WeatherNow,
    WeatherForecast,
    Footer,
  },
  data() {
    return {
      
    };
  },

  methods: {
    fetchData() {
      this.loading = true;
      this.currentWeatherLink = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;
      this.forecastWeatherLink = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&units=metric&lang=ru&appid=${API_KEY}`;

      const currentWeatherRequest = axios.get(this.currentWeatherLink);
      const forecastWeatherRequest = axios.get(this.forecastWeatherLink);

      Promise.all([currentWeatherRequest, forecastWeatherRequest])
        .then((responses) => {
          this.loading = false;
          console.log(responses);
          this.currentWeatherJSON = JSON.stringify(responses[0].data, null, 2);
          this.forecastWeatherJSON = JSON.stringify(responses[1].data, null, 2);

          let currentWeatherData = responses[0].data;
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
            currentWeatherData.dt * 1000,
          ).toLocaleTimeString();
          this.description = currentWeatherData.weather[0].description;
          this.icon = currentWeatherData.weather[0].icon;
          this.sunrise = new Date(
            currentWeatherData.sys.sunrise * 1000,
          ).toLocaleTimeString();
          this.sunset = new Date(
            currentWeatherData.sys.sunset * 1000,
          ).toLocaleTimeString();

          this.forecastWeatherData = responses[1].data.list;
        })
        .catch((error) => {
          alert(
            'Произошла ошибка, попробуйте повторить запрос или измение название локации, ошибка: ' +
              error,
          );
          console.log('Ошибка запроса:', error);
          this.temperature = null;
          this.feelsLike = null;
          this.tempMin = null;
          this.tempMax = null;
          this.pressure = null;
          this.humidity = null;
          this.visibility = null;
          this.windSpeed = null;
          this.windDegree = null;
          this.windGust = null;
          this.clouds = null;
          this.updateTime = null;
          this.description = null;
          this.icon = null;
          this.sunrise = null;
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

  created() {
    console.log(this.$route.params.city);
    this.cityName = this.$route.query.city;
    if (this.cityName) {
      this.fetchData(this.$route.params.city);
    }
  },
};
</script>

<style scoped></style>
