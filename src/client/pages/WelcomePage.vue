<template>
  <div class="WelcomePage">
    <Weatherify />

    <Welcome />

    <Advantages />

    <Contact />

    <Footer />
  </div>
</template>

<script>
import Weatherify from '../components/Weatherify.vue';
import Welcome from '../components/Welcome.vue';
import Advantages from '../components/Advantages.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Weatherify,
    Welcome,
    Advantages,
    Contact,
    Footer,
  },
};
</script>

<style scoped></style>
