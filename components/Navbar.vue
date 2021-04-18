<template>
  <v-card tile>
    <v-toolbar dense>
      <show-at breakpoint="mediumAndAbove">
        <v-toolbar-title
          ><a href="#" class="title">Portfolio - keshprad</a></v-toolbar-title
        >
      </show-at>

      <v-spacer></v-spacer>

      <div>
        <hide-at breakpoint="mediumAndAbove">
          <v-btn text href="https://devpost.com/keshprad">Devpost</v-btn>
        </hide-at>
        <v-btn icon href="https://www.linkedin.com/in/keshprad/">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/keshprad">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <show-at breakpoint="mediumAndAbove">
          <v-btn text href="https://devpost.com/keshprad">Devpost</v-btn>
        </show-at>
        <v-btn text href="https://keshprad.ml/resume.pdf">Resume</v-btn>
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
}
</script>

<style scoped>
a.title {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #b1858d;
}
</style>
