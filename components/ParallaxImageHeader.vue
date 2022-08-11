<template>
  <v-parallax dark :src="imgSrc" height="375">
    <v-container class="content">
      <h1>{{ title }}</h1>
      <br v-if="description" />
      <h3 v-if="description">{{ description }}</h3>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
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
