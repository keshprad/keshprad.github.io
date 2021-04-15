<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="footer text-center">
      <v-card-text>
        <div>
          <v-btn text href="https://devpost.com/keshprad">Devpost</v-btn>
          <v-btn icon href="https://www.linkedin.com/in/keshprad/">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/keshprad">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn text href="https://keshprad.ml/resume.pdf"> Resume </v-btn>
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
export default {}
</script>

<style scoped>
.footer {
  background-color: #462f39;
  border-color: #462f39;
}
</style>
