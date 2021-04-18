<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="footer text-center">
      <v-card-text>
        <div>
          <v-btn :href="socials.devpost" text>Devpost</v-btn>
          <v-btn :href="socials.linkedin" icon>
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn :href="socials.github" icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn :href="socials.resume" text>Resume</v-btn>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>keshprad</strong>
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
  background-color: #462f39;
  border-color: #462f39;
}
</style>
