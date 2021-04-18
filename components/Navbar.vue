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
        <v-btn icon href="https://www.linkedin.com/in/keshprad/">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon href="https://github.com/keshprad">
          <v-icon>mdi-github</v-icon>
        </v-btn>
        <v-btn text href="https://devpost.com/keshprad">Devpost</v-btn>
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

/* @media (max-width: 750px) {
  .title {
    display: none;
  }
  .right-spacer {
    display: block;
  }
} */
</style>
