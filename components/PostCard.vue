<template>
  <v-card class="mx-auto" max-width="400">
    <v-card
      :to="post.link.internalLink"
      :href="post.link.externalLink"
      :target="post.link.target"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="post.img"
        gradient="to top, rgba(0,0,0,.50), transparent"
      >
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-subtitle v-if="post.description" class="white--text">
          {{ post.description }}
        </v-card-subtitle>
      </v-img>
    </v-card>

    <v-card-actions class="d-flex justify-space-between">
      <v-card-subtitle>{{ post.createdAt }} in {{ tagsStr }}</v-card-subtitle>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    tagsStr: function tagsStr() {
      return this.post.tags.map((tag) => `#${tag}`).join(', ')
    },
  },
}
</script>
