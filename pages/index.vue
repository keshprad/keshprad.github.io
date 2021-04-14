<template>
  <div id="portfolio">
    <Intro />
    <v-container class="content">
      <Accordion :title="workExperience.title" :data="workExperience.data" />
      <div style="height: 100vh"></div>
    </v-container>
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Accordion from '../components/Accordion'

export default {
  components: {
    Intro,
    Accordion,
  },
  data: () => ({
    workExperience: {
      title: 'Work Experience',
      data: [
        {
          header: {
            title: 'dsapps',
            subtitle: 'Software Engineering Intern',
          },
          content: {
            body: [
              `At dsapps I worked on an AML project to assist in forecasting resource requirements for new tasks based on past historical data and patterns from other tasks. I worked on k-means clustering algorithms, as well as text cleaning.`,
            ],
            dates: 'Jun 2020 - Sept 2020',
          },
        },
        {
          header: {
            title: 'Elevate the Future',
            subtitle:
              'Director of Project Falcon, VP of San Jose, Founding Member',
          },
          content: {
            body: [
              `I founded and directed <a href="https://www.elevatethefuture.org/projectfalcon/" target="_blank">Project Falcon</a> — one of our most effective programs. I lead our officer team and managed a team of 30+ volunteers. I managed communications with clients and other businesses making sure everything went smoothly on both sides. I also helped build multiple websites for our clients. Besides this, I also created the course curriculum in use.`,
              `Additionally, as part of the organization's founding team, I advised on executive decisions and worked to expand our influence to over 40+ chapters around the world. Also, we are constantly working on implementing new events. Besides this, I help update/design our website.`,
            ],
            dates: 'Jul 2019 - Present',
          },
        },
        {
          header: {
            title: 'Letter to Physics',
            subtitle: 'Founder & Content Creator',
          },
          content: {
            body: [
              `<a href="https://www.lettertophysics.com/" target="_blank">Letter to Physics</a> is a website I created to post hundreds of physics solutions including solutions to the PhysicsBowl competition.`,
            ],
            dates: 'Sept 2018 - Present',
          },
        },
        {
          header: {
            title: 'Zamono',
            subtitle: 'Data Research Intern',
          },
          content: {
            body: [
              `I researched different diseases, their symptoms, and their treatments and inputted into tables for future use at a healthcare startup.`,
            ],
            dates: 'Jun 2016 - Aug 2016',
          },
        },
      ],
    },
  }),
}
</script>

<style>
.content {
  max-width: 1000px;
}
</style>
