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
      writing: '/writing',
      devpost: 'https://devpost.com/keshprad',
      github: 'https://github.com/keshprad',
      linkedin: 'https://www.linkedin.com/in/keshprad/',
      redirects: 'https://keshprad.github.io/redirects/',
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
.fill-animation:hover i,
div.md a:hover {
  color: white !important;
  border-color: var(--v-anchor-base);
  background-size: 100% 100%;
}
</style>
