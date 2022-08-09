<template>
  <div id="portfolio">
    <Intro />
    <v-container class="content"> </v-container>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>

<style scoped>
.content {
  max-width: 1024px;
  margin-bottom: 50px;
}
#footer {
  margin-top: 50px;
}
</style>

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
  color: var(--v-text1-base);
  border-color: var(--v-anchor-base);
  background-size: 100% 100%;
}
</style>
