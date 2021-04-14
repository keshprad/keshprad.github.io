<template>
  <v-container id="intro-component">
    <h1>Hi, I'm {{ name }} 👋</h1>
    <p>{{ description }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: 'Rishi Keshav Pradeep',
      description:
        "I'm a 12th grade high-school student at Lynbrook High School. " +
        "I'm a quick learner, and I'm very interested in ML. " +
        'I am always happy to connect with new people and collaborate on projects.' +
        'In my free time, I enjoy listening to music, learning online, and competing in hackathons.',
    }
  },
}
</script>

<style></style>
