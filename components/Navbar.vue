<template>
  <v-card tile>
    <v-toolbar dense color="#1e1e1e">
      <show-at breakpoint="mediumAndAbove">
        <v-toolbar-title>
          <NuxtLink to="/" class="title">Portfolio | keshprad</NuxtLink>
        </v-toolbar-title>
      </show-at>

      <v-spacer></v-spacer>

      <div>
        <hide-at breakpoint="mediumAndAbove">
          <v-btn small :href="socials.devpost" text>Devpost</v-btn>
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
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <NuxtLink to="/" style="text-decoration: none">
              <v-btn icon :color="hover ? '#f50057' : '#fff'">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </NuxtLink>
          </v-hover>
        </hide-at>
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
        <show-at breakpoint="mediumAndAbove">
          <NuxtLink :to="socials.resume" style="text-decoration: none">
            <v-btn href="#" text>Resume</v-btn>
          </NuxtLink>
        </show-at>
        <hide-at breakpoint="mediumAndAbove">
          <NuxtLink :to="socials.resume" style="text-decoration: none">
            <v-btn href="#" text small>Resume</v-btn>
          </NuxtLink>
        </hide-at>
      </div>

      <hide-at breakpoint="mediumAndAbove">
        <v-spacer></v-spacer>
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
a:hover,
v-btn:hover {
  color: #f50057;
}
</style>
