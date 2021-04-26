<template>
  <v-card tile>
    <v-toolbar dense>
      <show-at breakpoint="mediumAndAbove">
        <v-toolbar-title
          ><a href="/" class="title">Portfolio - keshprad</a></v-toolbar-title
        >
      </show-at>

      <v-spacer></v-spacer>

      <div>
        <hide-at breakpoint="mediumAndAbove">
          <v-btn :href="socials.devpost" text>Devpost</v-btn>
        </hide-at>
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
        <show-at breakpoint="mediumAndAbove">
          <v-btn :href="socials.devpost" text>Devpost</v-btn>
        </show-at>
        <v-btn :href="socials.resume" text>Resume</v-btn>
      </div>

      <hide-at breakpoint="mediumAndAbove">
        <v-spacer class="right-spacer"></v-spacer>
      </hide-at>
    </v-toolbar>
  </v-card>
</template>

<script>
import { showAt, hideAt } from 'vue-breakpoints'
export default {
  components: { showAt, hideAt },
  props: {
    socials: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
a.title {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #f50057;
}
</style>
