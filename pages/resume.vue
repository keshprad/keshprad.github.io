<template>
  <iframe id="resume" src="/resume.pdf" frameborder="0" />
</template>

<script>
export default {
  layout: 'navOnly',
  head() {
    return {
      title: 'Resume',
    }
  },
}
</script>

<style scoped>
#resume {
  width: 100%;
  height: 100%;
}
</style>
