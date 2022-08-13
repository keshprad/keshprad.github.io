<template>
  <v-card
    :id="
      (card.id ? card.id : card.title)
        .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
    "
    class="mx-auto my-5 background2"
  >
    <show-at breakpoint="mediumAndAbove">
      <v-list-item>
        <span class="font-weight-bold">
          {{ card.title }}
        </span>
        <span v-if="card.subtitle" class="font-italic font-weight-regular">
          &nbsp;- {{ card.subtitle }}
        </span>
        <v-spacer></v-spacer>
        <span v-if="card.dates" class="subtitle-2 text2--text">
          ({{ card.dates }})
        </span>
      </v-list-item>
    </show-at>
    <hide-at breakpoint="mediumAndAbove">
      <v-container>
        <div class="d-flex flex-wrap justify-space-between">
          <span class="font-weight-bold">
            {{ card.title }}
          </span>
          <span
            v-if="card.dates"
            class="subtitle-2 text2--text d-none d-sm-block"
          >
            ({{ card.dates }})
          </span>
        </div>
        <div v-if="card.subtitle" class="font-italic font-weight-regular">
          {{ card.subtitle }}
        </div>
        <div v-if="card.dates" class="subtitle-2 text2--text d-sm-none">
          ({{ card.dates }})
        </div>
      </v-container>
    </hide-at>
    <v-divider />

    <v-list-item
      class="align-start pa-2 d-flex flex-wrap flex-md-nowrap flex-lg-nowrap flex-xl-nowrap"
    >
      <div v-if="card.imgSrc && card.imgSrc.length > 0">
        <v-lazy v-for="(imgSrc, j) in card.imgSrc" :key="j">
          <EnlargeableImage :src="imgSrc" :src-large="imgSrc" />
        </v-lazy>
      </div>

      <div class="description px-2">
        <vue-markdown
          v-if="card.tldr"
          class="md px-2 pb-2 font-weight-bold text1--text"
          >tldr: {{ card.tldr }}</vue-markdown
        >
        <v-divider v-if="card.tldr" />

        <div
          v-if="card.body.length > 0 && Array.isArray(card.body[0])"
          class="d-flex flex-wrap flex-sm-nowrap"
        >
          <div
            v-for="(col, j) in card.body"
            :key="j"
            class="d-none d-sm-inline"
            :style="`width: ${100 / card.body.length}%;`"
          >
            <v-card-text
              v-for="(content, k) in col"
              :key="k"
              class="body-2 pa-2"
            >
              <vue-markdown class="md">{{ content }}</vue-markdown>
            </v-card-text>
          </div>
          <div
            v-for="(col, j) in card.body"
            :key="j"
            class="d-sm-none"
            :style="`width: 100%;`"
          >
            <v-card-text
              v-for="(content, k) in col"
              :key="k"
              class="body-2 pa-2"
            >
              <vue-markdown class="md">{{ content }}</vue-markdown>
            </v-card-text>
          </div>
        </div>

        <!-- Content -->
        <v-card-text
          v-for="(content, j) in card.body"
          v-else
          :key="j"
          class="body-2 pa-2"
        >
          <vue-markdown class="md">{{ content }}</vue-markdown>
        </v-card-text>

        <!-- Links/Icons -->
        <v-card-text v-if="card.links" class="pa-2">
          <v-hover v-for="(link, j) in card.links" :key="j" v-slot="{ hover }">
            <a
              class="link mr-4 text-decoration-none"
              :href="link.href"
              :target="link.target ? link.target : ''"
            >
              <v-icon
                v-if="link.icon"
                :color="hover ? 'primary' : 'text1'"
                v-text="link.icon"
              ></v-icon>
              <v-btn
                v-else-if="link.iconText"
                text
                :color="hover ? 'primary' : 'text1'"
                v-text="link.iconText"
              ></v-btn>
            </a>
          </v-hover>
        </v-card-text>
      </div>
    </v-list-item>
  </v-card>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'
import { showAt, hideAt } from 'vue-breakpoints'
import EnlargeableImage from '~/components/EnlargeableImage.vue'

export default {
  components: {
    EnlargeableImage,
    VueMarkdown,
    showAt,
    hideAt,
  },
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped>
div.md >>> p {
  margin: 0;
}
div.description {
  width: 100%;
}
.link:hover > i {
  transform: scale(1.2) rotateZ(-10deg);
}
</style>
