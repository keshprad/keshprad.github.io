<template>
  <v-chip-group>
    <v-chip
      v-for="(tag, i) in tags"
      :key="i"
      v-model="tag.active"
      :value="tag.label"
      filter
      outlined
      @input="update"
    >
      #{{ tag.label }}
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
    update: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
}
</script>
