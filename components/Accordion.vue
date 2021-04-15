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
              <v-spacer></v-spacer>
              <span v-if="item.header.links">
                <a
                  v-for="(link, j) in item.header.links"
                  :key="j"
                  :href="link.href"
                  class="icon"
                >
                  <v-icon v-if="link.icon" dense v-text="link.icon"></v-icon>
                  <v-btn
                    v-else-if="link.iconText"
                    text
                    small
                    v-text="link.iconText"
                  ></v-btn>
                </a>
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
            <p v-if="item.content.dates" class="content-dates">
              ({{ item.content.dates }})
            </p>
            <v-card-text
              v-if="item.content.icons && item.content.icons.length > 0"
              class="content-icons-row"
            >
              <a
                v-for="(icon, j) in item.content.icons"
                :key="j"
                class="icon"
                :href="icon.link"
              >
                <v-icon v-if="icon.icon" dense v-text="icon.icon"></v-icon>
                <v-btn
                  v-else-if="icon.iconText"
                  text
                  small
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
a.icon {
  text-decoration: none;
  margin: 0 5px;
}
.icon:hover > i,
.icon:hover > button {
  color: #b1858d;
}
.icon:hover > i {
  transform: scale(1.2) rotateZ(-10deg);
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
.header-icon {
  text-decoration: none;
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
.content-dates {
  font-style: italic;
  text-align: right;
  color: #a7a7a7;
  margin-bottom: 0px;
}
</style>
