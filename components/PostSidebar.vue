<template>
  <div
    :style="containerStyle"
    :class="`${containerClass} post-sidebar-component`"
  >
    <v-card class="mb-4" max-width="300">
      <v-img height="200" :src="currentPost.img"></v-img>
    </v-card>
    <h6 class="post-title mb-2">{{ currentPost.title }}</h6>
    <div v-if="currentPost.description" class="text-body-1 text2--text">
      {{ currentPost.description }}
    </div>
    <div class="text-subtitle-2 text2--text">
      {{ currentPostDtStr }} in {{ currentPostTagsStr }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPost: {
      type: Object,
      default: () => {},
    },
    containerClass: {
      type: String,
      default: '',
    },
    containerStyle: {
      type: String,
      default: '',
    },
  },
  computed: {
    currentPostTagsStr() {
      return this.currentPost.tags.map((tag) => `#${tag}`).join(', ')
    },
    currentPostDtStr() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      const dt = new Date(this.currentPost.createdAt)
      return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
    },
  },
}
</script>

<style scoped>
.post-title,
.title {
  font-weight: 400;
  font-size: 1.125rem;
  letter-spacing: 0.0125em;
}
</style>
