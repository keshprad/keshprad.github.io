<template>
  <v-app dark>
    <div id="content d-flex align-center justify-center">
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

<style scoped></style>
