<template>
  <div class="header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/" class="title">Weatherify</router-link>
        <img src="/src/client/public/logo.png" alt="logo" />
      </div>
      <div class="links">
        <router-link to="/">Main page</router-link>
        <router-link to="/search">Search page</router-link>
      </div>
      <div class="lang">
        <div class="rect1">
          <p>En</p>
          <div class="rect2">Ru</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  
};
</script>

<style scoped>
.selected {
  color: #000;
  text-align: center;
  font-family: Old Standard TT;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.header-container {
  max-width: 1583px;
  padding: 15px 0px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header {
  background-color: var(--light-pink);
}
.logo {
  margin-right: 187px;
  align-items: end;
  display: flex;
}
.title {
  font-family: League Gothic;
  font-size: 70px;
  line-height: 66px;
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
}
.links {
  margin-right: 270px;
  position: relative;
  top: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  font-size: 30px;
  text-align: center;
}
.rect1 {
  width: 160px;
  height: 60px;
  position: relative;
  top: 25px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 50px;
  border: 1px solid #000;
}
.rect2 {
  width: 90px;
  height: 60px; 
  position: relative;
  right: 16px;
  text-align: center;
  line-height: 60px;
  border-radius: 50px 80px 0px 50px;
  border: 1px solid #000;
}
</style>
