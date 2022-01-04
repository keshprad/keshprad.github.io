<template>
  <v-app dark>
    <Navbar id="navbar" :socials="socials" />
    <div id="content">
      <Nuxt />
    </div>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar,
  },
  data: () => ({
    socials: {
      devpost: 'https://devpost.com/keshprad',
      linkedin: 'https://www.linkedin.com/in/keshprad/',
      github: 'https://github.com/keshprad',
      resume: '/resume',
    },
  }),
  mounted() {
    const midHeight =
      window.innerHeight - document.getElementById('navbar').clientHeight
    document.getElementById('content').style.minHeight = `${midHeight}px`
  },
}
</script>

<style></style>
