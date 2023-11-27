<template>
  <div class="footer">
    <div class="footer-container">
      <div class="rights">© 2023 Weatherify. All rights reserved.</div>
      <div class="design-author">
        <div>Design by:</div>
        <a class="link" href="https://web.telegram.org/k/#@kloowq">@kloowq</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: var(--blue);
}
.footer-container {
  max-width: 1583px;
  margin: auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
}
.rights {
  margin: auto;
  margin-right: 43%;
  font-family: 'League Gothic', sans-serif;
  font-size: 20px;
}
.design-author {
  padding-top: 120px;
  padding-bottom: 40px;
  display: flex;
  gap: 5px;
}
</style>
