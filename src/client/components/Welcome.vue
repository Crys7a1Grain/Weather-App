<template>
  <div class="welcome" id="welcome">
    <div class="welcome-container">
      <div class="text-block">
        <h2 class="title">Welcome to Weatherify!</h2>
        <p class="description">
          Tired of complex weather widgets with countless buttons, charts, and
          doodads? Embrace the simplicity and elegance of Weatherify, the app that
          brings you vital weather data without the distractions.
        </p>
      </div>
      <div class="icon-block">
        <img class="image" src="/src/client/public/welcome.png" alt="welcome" />
        <form @submit.prevent="redirect">
          <button class="search-button">
            <input
              class="input"
              v-model="cityName"
              required
              type="text"
              placeholder="Введите локацию"
            />
            <svg
              @click="redirectToSecondPage"
              class="icon"
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.75"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.1786 2.32699C8.13696 2.32699 2.42858 7.79659 2.42858 14.5437C2.42858 21.2908 8.13696 26.7604 15.1786 26.7604C18.6964 26.7604 21.8791 25.3968 24.1875 23.1885C26.5007 20.9755 27.9287 17.9202 27.9287 14.5437C27.9287 7.79659 22.2203 2.32699 15.1786 2.32699ZM0 14.5437C0 6.51093 6.79517 0 15.1786 0C23.5621 0 30.3573 6.51093 30.3573 14.5437C30.3573 18.1436 28.9912 21.4398 26.7302 23.9785L33.6431 30.5907C34.1179 31.0444 34.1192 31.7821 33.6456 32.2358C33.172 32.6908 32.4022 32.6919 31.9286 32.2382L25.012 25.6237C22.3636 27.7832 18.9296 29.0874 15.1786 29.0874C6.79517 29.0874 0 22.5765 0 14.5437Z"
                fill="black"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityName: '',
    };
  },
  methods: {
    redirectToSecondPage() {
      this.$router.push({ name: 'search', query: { city: this.cityName } });
    },
  },
};
</script>

<style scoped>
.welcome {
  background-color: var(--blue);
}
.welcome-container {
  padding-left: 300px;
  padding-right: 200px;
  padding-top: 150px;
  padding-bottom: 370px;
  display: flex;
  align-items: flex-end;
}
.text-block {
  max-width: 710px;
  padding-right: 160px;
}
.title {
  padding-bottom: 40px;
  font-family: 'League Gothic', sans-serif;
  font-size: 80px;
}
.description {
  font-family: 'Old Standard TT', serif;
  font-size: 40px;
}
.icon-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.image {
  width: 400px;
  height: 400px;
}
.input {
  width: 80%;
  height: 80%;
  padding-left: 25px;
  font-size: 34px;
  background-color: inherit;
  border: none;
  outline: none;
}
.input::placeholder {
  color: var(--black);
  font-weight: 400;
  font-size: 24px;
  font-family: 'Old Standard TT', serif;
}
.search-button {
  width: 450px;
  height: 100px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 50px;
  background: inherit;
}
.icon {
  cursor: pointer;
  position: relative;
  right: 40px;
}
</style>
