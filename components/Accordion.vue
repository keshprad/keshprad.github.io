<template>
  <v-container fluid>
    <v-row justify="center">
      <h1 class="title">{{ title }}</h1>

      <v-expansion-panels popout>
        <v-expansion-panel v-for="(item, i) in data" :key="i" hide-actions>
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <span class="header-title">
                <strong>{{ item.header.title }}&nbsp;</strong>
              </span>
              <span v-if="item.header.subtitle" class="header-subtitle">
                - {{ item.header.subtitle }}
              </span>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content class="content">
            <v-divider></v-divider>
            <!-- eslint-disable vue/no-v-html -->
            <v-card-text
              v-for="(p, j) in item.content.body"
              :key="j"
              class="content-body"
              v-html="p"
            ></v-card-text>
            <!--eslint-enable-->
            <span v-if="item.content.dates" class="content-dates">
              ({{ item.content.dates }})
            </span>
            <v-card-text
              v-if="item.content.links && item.content.links.length > 0"
              class="content-body"
            >
              <span v-for="(link, j) in item.content.links" :key="j">
                | <a :href="link.href">{{ link.text }}</a> |
              </span>
            </v-card-text>
            <v-card-text
              v-if="item.content.icons && item.content.icons.length > 0"
              class="content-icons-row"
            >
              <a
                v-for="(icon, j) in item.content.icons"
                :key="j"
                class="content-icon"
                :href="icon.link"
              >
                <v-icon v-if="icon.icon" v-text="icon.icon"></v-icon>
                <v-btn
                  v-else-if="icon.iconText"
                  text
                  v-text="icon.iconText"
                ></v-btn>
              </a>
            </v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.title {
  margin: 20px 0;
}
.header {
  font-size: 1.1rem;
}
.header-title a {
  text-decoration: none;
}
.header-subtitle {
  font-style: italic;
}
.content-body,
.content-dates {
  font-size: 0.95rem;
  padding: 4px;
}
.content-body >>> a {
  color: #b1858d;
  text-decoration: none;
}
.content-icons-row {
  text-align: center;
}
.content-icon {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
}
.content-icon:hover > i,
.content-icon:hover > button {
  color: #b1858d;
}
.content-icon:hover > i {
  transform: scale(1.2) rotateZ(-10deg);
}
.content-dates {
  font-style: italic;
  color: #a7a7a7;
}
</style>
