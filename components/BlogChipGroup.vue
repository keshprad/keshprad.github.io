<template>
  <v-chip-group multiple>
    <v-chip
      v-for="(tag, i) in tags"
      :key="i"
      v-model="tag.active"
      :value="tag.label"
      filter
    >
      {{ tag.label }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {}
  },
}
</script>
