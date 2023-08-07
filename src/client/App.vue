<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div>Введите название города:</div>
      <input type="text" v-model="cityName" required />
      <button type="submit">Поиск</button>
    </form>

    <div v-if="apiLink">
      <p>Сгенерированная API ссылка:</p>
      <code>{{ apiLink }}</code>
    </div>

    <div v-if="jsonData">
      <p>JSON данные:</p>
      <pre>{{ jsonData }}</pre>
    </div>

    <div>
      <p>Температура в {{ cityName }}:</p>
      <h1>{{ temperature }}</h1>
      <p>Ощущается как:</p>
      <h2>{{ feelsLike }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cityName: "",
      apiLink: "",
      jsonData: null,
      temperature: null,
      feelsLike: null,
    };
  },
  methods: {
    handleSubmit() {
      this.apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&lang=ru&appid=c46600730f35ad4e275560d72ee90634`;

      axios
        .get(this.apiLink)
        .then((response) => {
          this.jsonData = JSON.stringify(response.data, null, 2);
          this.temperature = response.data.main.temp;
          this.feelsLike = response.data.main.feels_like;
        })
        .catch((error) => {
          console.error("Ошибка запроса:", error);
          this.temperature = null;
          this.feelsLike = null;
          this.jsonData = null;
        });
    },
  },
};
</script>

<style scoped></style>
