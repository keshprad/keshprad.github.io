<template>
  <div>
    <show-at breakpoint="mediumAndAbove">
      <ParallaxImageHeader
        :title="title"
        :subtitle="subtitle"
        :description="description"
        :img-src="imgSrc"
      />
    </show-at>
    <hide-at breakpoint="mediumAndAbove">
      <ParallaxImageHeader
        :title="title"
        :subtitle="subtitle"
        :description="description"
        :img-src="imgSrc"
        height="500"
      />
    </hide-at>
  </div>
</template>

<script>
import { showAt, hideAt } from 'vue-breakpoints'
import ParallaxImageHeader from '~/components/ParallaxImageHeader'

export default {
  components: {
    showAt,
    hideAt,
    ParallaxImageHeader,
  },
  data() {
    return {
      title: "Hi, I'm Rishi Keshav Pradeep 👋",
      subtitle: 'I love software and learning!',
      description:
        "I'm a sophomore at UMD with a strong interest in Algorithms, ML, Backend Engineering. " +
        "I'm a quick learner and always happy to meet new people. " +
        'In my free time, I enjoy creating projects on GitHub, playing/watching basketball.',
      imgSrc: '/img/portfolio-banner.png',
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
