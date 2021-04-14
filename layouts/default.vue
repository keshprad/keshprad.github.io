<template>
  <v-app dark>
    <Navbar />
    <v-container class="portfolio">
      <nuxt />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar,
  },
}
</script>

<style scoped></style>
