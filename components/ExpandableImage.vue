<template>
  <div class="img">
    <expandable-image class="bg-click" :src="src" close-on-background-click />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style scoped>
.img >>> img {
  background-color: rgba(0, 0, 0, 0.25);
  object-fit: contain;
  margin: 0;
  padding: 10px;
  max-height: 200px;
  max-width: 300px;
  border-radius: 20px;
}
</style>

<style lang="scss">
.expandable-image.expanded.bg-click {
  cursor: zoom-out;
  & > img {
    cursor: default;
  }
}
</style>
