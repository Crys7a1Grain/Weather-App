<template>
  <div class="contact" id="contact">
    <div class="contact-container">
      <p class="title">
        Want to ask a question or <br />
        have a problem?
      </p>
      <p class="description">
        Write to us about it on the Github:
        <a class="link" target="_blank" href="https://github.com/Crys7a1Grain/Weather-App/issues"
          >https://github.com/Crys7a1Grain/Weather-App/issues</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  background-color: var(--light-pink);
}
.contact-container {
  max-width: 1220px;
  padding: 200px 0;
  margin: auto;
}
.title {
  font-size: 80px;
  letter-spacing: 4px;
  font-family: 'League Gothic', sans-serif;
  margin-bottom: 50px;
}
.description {
  font-size: 40px;
  font-family: 'Old Standard TT', serif;
}
</style>
