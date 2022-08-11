<template>
  <ParallaxImageHeader
    :title="title"
    :description="description"
    :img-src="imgSrc"
  />
</template>

<script>
import ParallaxImageHeader from '~/components/ParallaxImageHeader'

export default {
  components: {
    ParallaxImageHeader,
  },
  data() {
    return {
      title: "Hi, I'm Rishi Keshav Pradeep 👋",
      description:
        "I'm a sophomore at UMD with a strong interest in Algorithms, ML, Backend Engineering. " +
        "I'm a quick learner and always happy to meet new people and collaborate on projects. " +
        'In my free time, I enjoy creating projects on GitHub, listening to music, and playing/watching basketball.',
      imgSrc: '/img/intro-bg.png',
    }
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
</style>
