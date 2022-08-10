<template>
  <v-app dark>
    <div id="content">
      <h1 v-if="error.statusCode === 404" class="text-center mb-8">
        {{ pageNotFound }}
      </h1>
      <h1 v-else class="text-center mb-8">
        {{ otherError }}
      </h1>
      <h1 class="text-center text-decoration-underline">Pages:</h1>
      <h2 class="text-center my-1">
        <v-hover v-slot="{ hover }">
          <NuxtLink to="/" class="text-decoration-none fill-animation">
            <v-icon :color="hover ? 'text1' : 'primary'" class="mb-1">
              mdi-home
            </v-icon>
            Home
          </NuxtLink>
        </v-hover>
      </h2>
      <h2 class="text-center my-1">
        <v-hover v-slot="{ hover }">
          <NuxtLink to="/resume" class="text-decoration-none fill-animation">
            <v-icon :color="hover ? 'text1' : 'primary'" class="mb-1">
              mdi-file-account
            </v-icon>
            Resume
          </NuxtLink>
        </v-hover>
      </h2>
    </div>
  </v-app>
</template>

<script>
export default {
  components: {},
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Error 404: Page Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
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

<style scoped></style>
