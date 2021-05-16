<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="footer text-center">
      <v-card-text>
        <div>
          <v-btn :href="socials.devpost" text>Devpost</v-btn>
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.linkedin"
              icon
              :color="hover ? '#f50057' : '#fff'"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.github"
              icon
              :color="hover ? '#f50057' : '#fff'"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-hover>
          <NuxtLink :to="socials.resume" style="text-decoration: none">
            <v-btn text>Resume</v-btn>
          </NuxtLink>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>keshprad</strong> — {{ new Date().getFullYear() }}<br />
        Built with <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: {
    socials: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.footer {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
}
a:hover {
  color: #f50057;
}
</style>
