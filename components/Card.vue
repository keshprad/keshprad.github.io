<template>
  <v-card
    :id="
      (card.id ? card.id : card.title)
        .replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
    "
    class="mx-auto my-5"
  >
    <v-list-item>
      <span class="font-weight-bold">
        {{ card.title }}
      </span>
      <span v-if="card.subtitle" class="font-italic font-weight-regular">
        &nbsp;- {{ card.subtitle }}
      </span>
      <v-spacer></v-spacer>
      <span v-if="card.dates" class="subtitle-2 grey--text">
        ({{ card.dates }})
      </span>
    </v-list-item>
    <v-divider />

    <v-list-item class="align-start pa-2">
      <div v-if="card.imgSrc && card.imgSrc.length > 0">
        <v-lazy v-for="(imgSrc, j) in card.imgSrc" :key="j" class="mr-5">
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
          class="d-flex"
        >
          <div
            v-for="(col, j) in card.body"
            :key="j"
            :style="`width: ${100 / card.body.length}%`"
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
import EnlargeableImage from '~/components/EnlargeableImage.vue'

export default {
  components: {
    EnlargeableImage,
    VueMarkdown,
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
