<template>
  <div id="portfolio">
    <ParallaxImageHeader
      :title="headerTitle"
      :description="headerDescription"
      :img-src="bannerSrc"
    />
    <v-container class="content my-0">
      <v-card-text>
        <h2 class="text-h6 mb-2">Filter By Categories</h2>
        <WritingTagsGroup :tags="tags" :update="filterPosts" />
      </v-card-text>
      <v-container class="post-cards d-flex justify-space-around flex-wrap">
        <v-lazy v-for="(post, i) in displayedPosts" :key="i" class="my-4">
          <PostCard :post="post" />
        </v-lazy>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import externalPosts from './externalPosts.json'
import PostCard from '~/components/PostCard'
import WritingTagsGroup from '~/components/WritingTagsGroup'
import ParallaxImageHeader from '~/components/ParallaxImageHeader'

export default {
  components: {
    PostCard,
    WritingTagsGroup,
    ParallaxImageHeader,
  },
  async asyncData({ $content }) {
    const internalPosts = await $content('posts')
      .only(['title', 'description', 'slug', 'img', 'createdAt', 'tags'])
      .fetch()

    const posts = [...externalPosts, ...internalPosts]
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
    for (const post of posts) {
      // manipulate createdAt date
      post.dt = new Date(post.createdAt)
      post.createdAt = `${
        months[post.dt.getMonth()]
      } ${post.dt.getDate()}, ${post.dt.getFullYear()}`

      // conv tags list to set
      post.tags = new Set(post.tags)

      if (!post.link) {
        // manipulate link for internal posts
        post.link = {
          type: 'internal',
          internalLink: `/writing/${post.slug}`,
        }
        delete post.slug
      }
    }

    posts.sort((a, b) => {
      return b.dt > a.dt ? 1 : -1
    })
    const displayedPosts = [...posts]

    return {
      posts,
      displayedPosts,
    }
  },
  data: () => ({
    tags: [
      {
        active: false,
        label: 'professional',
      },
      {
        active: false,
        label: 'travel',
      },
      {
        active: false,
        label: 'tutorial',
      },
    ],
    headerTitle: 'Writing',
    headerDescription: 'A collection of my writing. :)',
    bannerSrc: '/img/writing-banner.jpeg',
  }),
  head() {
    return {
      title: 'Writing',
    }
  },
  methods: {
    filterPosts(e) {
      const activeTags = []
      for (const tag of this.tags) {
        if (tag.active) {
          activeTags.push(tag.label)
        }
      }
      this.displayedPosts = this.posts.filter((p) => {
        if (activeTags.length > 0) {
          let res = true
          for (let i = 0; res && i < activeTags.length; i++) {
            if (!p.tags.has(activeTags[i])) {
              res = false
            }
          }
          return res
        } else {
          return true
        }
      })
    },
  },
}
</script>

<style scoped>
.content {
  max-width: 1024px;
}
#footer {
  margin-top: 50px;
}
</style>

// Global Styles
<style>
.fill-animation,
div.md a {
  color: var(--v-anchor-base);
  text-decoration: none;
  border: none;
  border-bottom: 2px solid var(--v-anchor-base);
  background-image: linear-gradient(
    120deg,
    var(--v-anchor-base),
    var(--v-anchor-base)
  );
  background-size: 100% 0;
  background-position: 0 100%;
  transition: background-size 0.125s ease-in, color 0.125s ease-in;
}
.fill-animation:hover,
div.md a:hover {
  color: var(--v-text1-base);
  border-color: var(--v-anchor-base);
  background-size: 100% 100%;
}
</style>
