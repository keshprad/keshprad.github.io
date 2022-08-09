<template>
  <div>
    <h2
      :id="
        title
          .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, '')
          .replace(/\s+/g, '-')
          .toLowerCase()
      "
      class="my-6 text-center text1--text"
    >
      {{ title }}
    </h2>
    <Card v-for="(card, i) in data" :key="i" :card="card" />
  </div>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      default: () => '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped></style>
