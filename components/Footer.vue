<template>
  <v-footer padless>
    <v-card
      flat
      tile
      width="100%"
      class="footer text-center"
      color="background1"
    >
      <v-card-text>
        <div>
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.blog"
              text
              :color="hover ? 'primary' : 'text1'"
              >Blog</v-btn
            >
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.linkedin"
              icon
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.github"
              icon
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <NuxtLink :to="socials.resume" class="text-decoration-none">
              <v-btn href="#" text :color="hover ? 'primary' : 'text1'"
                >Resume</v-btn
              >
            </NuxtLink>
          </v-hover>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text1--text">
        <strong>keshprad</strong> — {{ new Date().getFullYear() }}<br />
        Built with
        <a href="https://nuxtjs.org/" target="_blank" class="fill-animation"
          >Nuxt.js</a
        >
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
/* .footer {
  background-color: #1e1e1e;
  border-color: #1e1e1e;
} */
</style>
