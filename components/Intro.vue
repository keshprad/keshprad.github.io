<template>
  <v-parallax id="intro-component" dark src="/img/intro-bg.png" height="375">
    <v-container class="content">
      <h1>Hi, I'm {{ name }} 👋</h1>
      <br />
      <h3>{{ description }}</h3>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      name: 'Rishi Keshav Pradeep',
      description:
        "I'm a sophomore at UMD with a strong interest in Algorithms, ML, Backend Engineering. " +
        "I'm a quick learner and always happy to meet new people and collaborate on projects. " +
        'In my free time, I enjoy creating projects on GitHub, listening to music, and playing/watching basketball.',
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
