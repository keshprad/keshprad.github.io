<template>
  <v-app dark>
    <Navbar id="navbar" :socials="socials" />
    <Nuxt id="content" />
    <Footer id="footer" :socials="socials" />
  </v-app>
</template>

<script>
import Footer from '~/components/Footer'
import Navbar from '~/components/Navbar'

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
      resume: '/resume',
      redirects: 'https://keshprad.github.io/redirects/',
    },
  }),
  mounted() {
    const contentHeight =
      window.innerHeight -
      (document.getElementById('navbar').clientHeight +
        document.getElementById('footer').clientHeight)
    document.getElementById('content').style.minHeight = `${contentHeight}px`
  },
}
</script>

<style>
html,
body {
  background: #1e1e1e;
}
</style>

<style scoped>
#portfolio {
  max-width: 100vw;
  padding: 0;
}
</style>
