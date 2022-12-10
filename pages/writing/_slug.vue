<template>
  <div>
    <show-at breakpoint="mediumAndAbove">
      <ParallaxImageHeader :img-src="bannerSrc" :height="250" />
    </show-at>
    <hide-at breakpoint="mediumAndAbove">
      <PostSidebar
        :current-post="page"
        container-class="d-flex flex-column align-center mt-4 text-center"
      />
    </hide-at>
    <v-container class="content d-flex justify-space-between my-5">
      <show-at breakpoint="mediumAndAbove">
        <PostSidebar
          :current-post="page"
          container-style="min-width: 350px; max-width: 350px;"
        />
      </show-at>
      <div class="px-5">
        <show-at breakpoint="mediumAndAbove">
          <div>
            <h1 class="text2--text">{{ page.title }}</h1>
            <div v-if="page.description" class="text-body-1 text2--text">
              {{ page.description }}
            </div>
          </div>
        </show-at>
        <hr class="mt-2 mb-5" />
        <nuxt-content :document="page" />
      </div>
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
  head() {
    return {
      title: this.page.title,
    }
  },
  computed: {
    currentPostTagsStr() {
      return this.page.tags.map((tag) => `#${tag}`).join(', ')
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
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ]
      const dt = new Date(this.page.createdAt)
      return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
    },
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
  line-height: 30px;
  margin-bottom: 30px;
}
.nuxt-content hr {
  margin-bottom: 10px;
  margin-right: 50px;
}
</style>
