<template>
  <div class="check">
    <RouterLink to="/search" class="check-btn title"
      >Посмотреть прогноз погоды</RouterLink
    >
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {};
</script>

<style scoped>
.check {
  min-height: 500px;
  padding-top: 300px;
  display: flex;
  justify-content: center;
  background-color: var(--light-pink);
}
.check-btn {
  padding: 30px;
  display: inline-block;
  align-self: flex-start;
  font-size: 40px;
  border: solid 1px #000;
  border-radius: 40px;
}
</style>
