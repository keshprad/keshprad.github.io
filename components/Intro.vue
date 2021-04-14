<template>
  <v-parallax
    id="intro-component"
    dark
    :src="require('@/assets/img/intro-bg.jpg')"
    height="300"
  >
    <v-container class="content">
      <h1>Hi, I'm {{ name }} 👋</h1>
      <p>{{ description }}</p>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      name: 'Rishi Keshav Pradeep',
      description:
        "I'm a 12th-grade high-school student at Lynbrook High School with a strong interest in ML. " +
        "I'm a quick learner, and I'm always happy to connect with new people and collaborate on projects. " +
        'In my free time, I enjoy listening to music, learning online, and competing in hackathons.',
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
