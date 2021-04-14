<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="deep-purple lighten-2 text-center">
      <v-card-text>
        <div>
          <v-btn text href="https://devpost.com/keshprad">Devpost</v-btn>
          <v-btn icon href="https://www.linkedin.com/in/keshprad/">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/keshprad">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn
            text
            href="https://media-exp1.licdn.com/dms/document/C562DAQGw5vHDzt84qg/profile-treasury-document-pdf-analyzed/0/1618380683177?e=1618509600&v=beta&t=d-hl2tBNbPR5mOADhMvINdawU3Jc2Tgzu4r-fRoStSs"
          >
            Resume
          </v-btn>
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

<style></style>
