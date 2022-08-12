<template>
  <div>
    <show-at breakpoint="mediumAndAbove">
      <ParallaxImageHeader :img-src="bannerSrc" height="250" />
    </show-at>
    <hide-at breakpoint="mediumAndAbove">
      <PostSidebar
        :current-post="page"
        container-class="d-flex flex-column align-center mt-4"
      />
    </hide-at>
    <v-container class="content d-flex justify-space-between my-5">
      <show-at breakpoint="mediumAndAbove">
        <PostSidebar
          :current-post="page"
          container-style="min-width: 350px; max-width: 350px;"
        />
      </show-at>
      <nuxt-content :document="page" class="px-5" />
    </v-container>
  </div>
</template>

<script>
import { showAt, hideAt } from 'vue-breakpoints'
import ParallaxImageHeader from '~/components/ParallaxImageHeader'
import PostSidebar from '~/components/PostSidebar'

export default {
  components: {
    ParallaxImageHeader,
    PostSidebar,
    showAt,
    hideAt,
  },
  async asyncData({ $content, params }) {
    const page = await $content('posts', params.slug).fetch()
    return {
      page,
    }
  },
  data() {
    return {
      bannerSrc: '/img/writing-banner.jpeg',
    }
  },
}
</script>

<style scoped>
.content {
  max-width: 1024px;
}
</style>

<style>
.nuxt-content-container {
  width: 100%;
  color: var(--v-text2-base);
}
.nuxt-content p {
  letter-spacing: 0.03125em;
}
.nuxt-content hr {
  margin-bottom: 10px;
  margin-right: 50px;
}
</style>
