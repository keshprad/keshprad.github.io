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

              <!-- <v-col class="text-no-wrap" cols="5" sm="3">
                <v-chip
                  v-if="item.new"
                  :color="`${item.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ item.new }} new
                </v-chip>
                <strong>{{ item.title }}</strong>
              </v-col>

              <v-col
                v-if="item.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ item.excerpt }}
              </v-col> -->
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
            <v-card-text v-if="item.content.dates" class="content-dates">
              ({{ item.content.dates }})
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
.header-subtitle {
  font-style: italic;
}
.content-body,
.content-dates {
  font-size: 0.95rem;
  padding: 4px;
}
.content-body >>> a {
  color: #ff8a65;
  text-decoration: none;
}
.content-dates {
  font-style: italic;
  text-align: right;
  color: #a7a7a7;
}
</style>
