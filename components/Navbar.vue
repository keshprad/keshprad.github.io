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
        <v-btn
          text
          href="https://media-exp1.licdn.com/dms/document/C562DAQGw5vHDzt84qg/profile-treasury-document-pdf-analyzed/0/1618380683177?e=1618509600&v=beta&t=d-hl2tBNbPR5mOADhMvINdawU3Jc2Tgzu4r-fRoStSs"
          >Resume</v-btn
        >
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
  color: #9575cd;
}
</style>
