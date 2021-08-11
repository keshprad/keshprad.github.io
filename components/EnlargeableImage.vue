<template>
  <div class="img">
    <EnlargeableImage :src="src" :src_large="srcLarge" />
  </div>
</template>

<script>
import Vue from 'vue'
import EnlargeableImage from '@diracleo/vue-enlargeable-image'

export default {
  components: {
    EnlargeableImage: Vue.component('VueEnlargeableImage', EnlargeableImage),
  },
  props: {
    src: {
      type: String,
      default: () => '',
    },
    srcLarge: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
.img {
  background-color: rgba(0, 0, 0, 0.25);
  object-fit: contain;
  margin: 0;
  padding: 10px;
  max-height: 200px;
  max-width: 300px;
  border-radius: 20px;
}
.img >>> img.default {
  border-radius: 10px;
}
.img >>> .full img {
  background: var(--v-background2-base);
}
</style>
