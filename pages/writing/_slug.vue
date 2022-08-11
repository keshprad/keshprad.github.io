<template>
  <article>
    <ParallaxImageHeader
      :title="page.title"
      :description="page.description"
      :img-src="page.img"
    />
    <nuxt-content :document="page" />
    <p>{{ page }}</p>
  </article>
</template>

<script>
import ParallaxImageHeader from '~/components/ParallaxImageHeader'

export default {
  components: {
    ParallaxImageHeader,
  },
  async asyncData({ $content, params }) {
    const page = await $content('posts', params.slug).fetch()

    return {
      page,
    }
  },
}
</script>
