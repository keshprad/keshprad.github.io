<template>
  <v-app>
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
      blog: '/blog',
      devpost: 'https://devpost.com/keshprad',
      github: 'https://github.com/keshprad',
      linkedin: 'https://www.linkedin.com/in/keshprad/',
      redirects: 'https://keshprad.github.io/redirects/',
      resume: '/resume',
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

// Global Styles
<style>
.fill-animation,
div.md a {
  color: var(--v-anchor-base);
  text-decoration: none;
  border: none;
  border-bottom: 2px solid var(--v-anchor-base);
  background-image: linear-gradient(
    120deg,
    var(--v-anchor-base),
    var(--v-anchor-base)
  );
  background-size: 100% 0;
  background-position: 0 100%;
  transition: background-size 0.125s ease-in, color 0.125s ease-in;
}
.fill-animation:hover,
div.md a:hover {
  color: white !important;
  border-color: var(--v-anchor-base);
  background-size: 100% 100%;
}
</style>

<style scoped>
#portfolio {
  max-width: 100vw;
  padding: 0;
}
.theme--light.v-application {
  background-color: var(--v-background1-base) !important;
}
</style>
