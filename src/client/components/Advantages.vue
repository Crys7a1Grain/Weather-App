<template>
  <div class="advantages" id="advantages">
    <div class="advantages-container">
      <div class="row">
        <div class="big-block content-block">
          <p class="block-text number">500+</p>
          <p class="block-text description">Cities Supported</p>
        </div>
        <div class="small-block content-block">
          <p class="block-text number">2</p>
          <p class="block-text description">languages supported</p>
        </div>
      </div>
      <div class="row">
        <div class="small-block content-block">
          <img class="img" src="/src/client/public/temperature_map.jpg" alt="">
        </div>
        <div class="big-block content-block">
          <p class="block-text number">5</p>
          <p class="block-text description">for various map objects</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.advantages {
  background-color: var(--black);
}
.advantages-container {
  max-width: 1220px;
  margin: auto;
  padding: 58px 0px;
}
.row {
  padding-bottom: 15px;
  display: flex;
}
.content-block {
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-pink);
  background-color: #242424;
  border-radius: 40px;
}
.big-block {
  width: 700px;
  height: 327px;
}
.small-block {
  width: 475px;
  height: 327px;
}
.img {
  width: 475px;
  height: 327px;
  border-radius: 40px;
}
.block-text {
  display: inline-block;
}
.number {
  font-family: 'League Gothic', sans-serif;
  font-size: 80px;
}
.description {
  font-family: 'Old Standard TT', serif;
  font-size: 30px;
}
</style>