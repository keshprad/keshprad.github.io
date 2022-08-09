<template>
  <v-card tile elevation="0" class="d-flex justify-center background1">
    <v-toolbar dense color="background1" elevation="0" class="navbar-content">
      <show-at breakpoint="mediumAndAbove">
        <v-hover v-slot="{ hover }">
          <v-toolbar-title>
            <NuxtLink
              to="/"
              :class="`text-decoration-none ${
                hover ? 'primary--text' : 'text1--text'
              }`"
              >Portfolio | keshprad</NuxtLink
            >
          </v-toolbar-title>
        </v-hover>
      </show-at>

      <v-spacer></v-spacer>

      <div>
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              small
              :href="socials.blog"
              text
              :color="hover ? 'primary' : 'text1'"
              >Blog</v-btn
            >
          </v-hover>
        </hide-at>
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.linkedin"
              icon
              small
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-hover>
        </hide-at>
        <show-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.linkedin"
              icon
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-hover>
        </show-at>
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <NuxtLink to="/" class="text-decoration-none">
              <v-btn icon small :color="hover ? 'primary' : 'text1'">
                <v-icon>mdi-home</v-icon>
              </v-btn>
            </NuxtLink>
          </v-hover>
        </hide-at>
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.github"
              icon
              small
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-hover>
        </hide-at>
        <show-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.github"
              icon
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-hover>
        </show-at>
        <hide-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.redirects"
              icon
              small
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-link-variant</v-icon>
            </v-btn>
          </v-hover>
        </hide-at>
        <show-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.redirects"
              icon
              :color="hover ? 'primary' : 'text1'"
            >
              <v-icon>mdi-link-variant</v-icon>
            </v-btn>
          </v-hover>
        </show-at>
        <show-at breakpoint="mediumAndAbove">
          <v-hover v-slot="{ hover }">
            <v-btn
              :href="socials.blog"
              text
              :color="hover ? 'primary' : 'text1'"
              >Blog</v-btn
            >
          </v-hover>
        </show-at>
        <NuxtLink :to="socials.resume" class="text-decoration-none">
          <show-at breakpoint="mediumAndAbove">
            <v-hover v-slot="{ hover }">
              <v-btn href="#" text :color="hover ? 'primary' : 'text1'"
                >Resume</v-btn
              >
            </v-hover>
          </show-at>
          <hide-at breakpoint="mediumAndAbove">
            <v-hover v-slot="{ hover }">
              <v-btn href="#" text small :color="hover ? 'primary' : 'text1'"
                >Resume</v-btn
              >
            </v-hover>
          </hide-at>
        </NuxtLink>
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
.navbar-content {
  max-width: 1024px;
}
</style>
