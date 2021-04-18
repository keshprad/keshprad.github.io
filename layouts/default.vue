<template>
  <v-app dark>
    <Navbar :socials="socials" />
    <v-container class="portfolio">
      <nuxt />
    </v-container>
    <Footer id="footer" :socials="socials" />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default {
  components: {
    Footer,
    Navbar,
  },
  data: () => ({
    socials: {
      devpost: 'https://devpost.com/keshprad',
      linkedin: 'https://www.linkedin.com/in/keshprad/',
      github: 'https://github.com/keshprad',
      resume: '/resume.pdf',
    },
  }),
}
</script>

<style scoped>
.portfolio {
  max-width: 100vw;
  padding: 0;
}
</style>
