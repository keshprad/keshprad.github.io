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
    <PortfolioCard v-for="(card, i) in data" :key="i" :card="card" />
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard'

export default {
  components: {
    PortfolioCard,
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
