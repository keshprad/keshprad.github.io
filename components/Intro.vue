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
        "I'm a CS + Math student at UMD with a strong interest in Systems, Algorithms, and Full-Stack Development. " +
        'I love learning new things, and meeting new people!',
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
