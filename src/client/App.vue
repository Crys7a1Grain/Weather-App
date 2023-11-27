<template>
    <RouterView />

    <!-- <ApiLinks
      :currentWeatherLink="currentWeatherLink"
      :forecastWeatherLink="forecastWeatherLink"
    /> -->
    <!-- <JsonData
      :currentWeatherJSON:="currentWeatherJSON"
      :forecastWeatherJSON="forecastWeatherJSON"
    /> -->
</template>

<script>
import ApiLinks from './components/ApiLinks.vue';
import JsonData from './components/JsonData.vue';

export default {
  components: {
    ApiLinks,
    JsonData,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&family=Old+Standard+TT&family=Ubuntu:wght@400;500;700&display=swap');

:root {
  --light-pink: #ead2ac;
  --blue: #9cafb7;
  --black: #000000;
}

* {
  font-family: 'League Gothic', sans-serif;
  font-family: 'Old Standard TT', serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
p {
  margin: 0;
}
a {
  display: block;
  text-decoration: none;
  color: inherit;
}
.container {
  width: 60%;
  margin: auto;
}
.link {
  color: #0000ff;
  text-decoration: underline;
}
</style>
