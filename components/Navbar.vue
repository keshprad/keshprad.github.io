<template>
  <v-card tile>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title
        ><a href="#" class="title">Portfolio - keshprad</a></v-toolbar-title
      >

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
    </v-toolbar>
  </v-card>
</template>

<script>
export default {}
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
