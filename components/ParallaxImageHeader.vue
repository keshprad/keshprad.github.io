<template>
  <v-parallax dark :src="src" :height="height">
    <v-container class="content">
      <h1>{{ title }}</h1>
      <br v-if="subtitle" />
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <br v-if="description" />
      <h3 v-if="description">{{ description }}</h3>
    </v-container>
  </v-parallax>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    height: {
      type: Number,
      default: 375,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    randImgSrcArr: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    src() {
      if (this.imgSrc) {
        return this.imgSrc
      } else {
        return _.sample(this.randImgSrcArr)
      }
    },
  },
}
</script>

<style scoped>
.content {
  max-width: 900px;
}
.content p {
  margin-top: 16px;
}
.content h1 {
  font-size: 2em;
}
.content h3 {
  font-size: 1.17em;
}
</style>

<style>
.v-parallax__content {
  background: rgba(0, 0, 0, 0.25);
}
</style>
