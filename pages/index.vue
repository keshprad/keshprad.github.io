<template>
  <div id="portfolio">
    <Intro />
    <v-container class="content">
      <Accordion id="projects" :title="projects.title" :data="projects.data" />
      <Accordion
        id="work-experience"
        :title="workExperience.title"
        :data="workExperience.data"
      />
      <Accordion id="awards" :title="awards.title" :data="awards.data" />
      <Accordion
        id="education"
        :title="education.title"
        :data="education.data"
      />
    </v-container>
  </div>
</template>

<script>
import Accordion from '../components/Accordion'
import Intro from '../components/Intro'

export default {
  components: {
    Accordion,
    Intro,
  },
  data: () => ({
    projects: {
      title: 'Projects',
      data: [
        {
          header: {
            title: 'YouTube Mentions',
            subtitle: '2nd Place Media Track @ PickHacks 2021',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/youtube-mentions',
              },
              {
                iconText: 'Devpost',
                href: 'https://devpost.com/software/youtube-mentions',
              },
              {
                icon: 'mdi-youtube',
                href: 'https://www.youtube.com/watch?v=O9BwcoK1fEM',
              },
            ],
          },
          content: {
            body: [
              `This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side.`,
            ],
          },
        },
        {
          header: {
            title: 'Autoscriber',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/autoscriber-app',
              },
              {
                icon: 'mdi-link-variant',
                href: 'https://autoscriber-app.github.io/',
              },
            ],
          },
          content: {
            body: [
              `Autoscriber is a progressive web app (PWA) that listens to your microphone audio, transcribes your speech, and summarizes your meeting in bullet point format. During the meeting, participants simply open a session link and turn on their microphone. Once the meeting is over, Autoscriber will use AI language models to analyze the conversation and jot down important sentences automatically.`,
              `<strong>tldr: PWA for automatic online meeting notes using speech recognition and NLP.</strong>`,
            ],
          },
        },
        {
          header: {
            title: 'Algorithms',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/Algorithms',
              },
            ],
          },
          content: {
            body: [
              `A repository full of various algorithms and data structures that I find interesting.`,
            ],
          },
        },
        {
          header: {
            title: 'competitive programming',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/competitive-programming',
              },
            ],
          },
          content: {
            body: [`competitive programming practice solutions`],
          },
        },
        {
          header: {
            title: 'best-comeback',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/best-comeback',
              },
              {
                icon: 'mdi-image',
                href:
                  'https://github.com/keshprad/best-comeback/blob/main/README.md#examples',
              },
            ],
          },
          content: {
            body: [
              `Want to end an argument with a win? This repo creates an automatic "Deal With It" gif.`,
            ],
          },
        },
        {
          header: {
            title: 'my-portfolio',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/my-portfolio',
              },
              {
                icon: 'mdi-link-variant',
                href: 'https://keshprad.ml/',
              },
            ],
          },
          content: {
            body: [`Repo for my personal portfolio site`],
          },
        },
        {
          header: {
            title: 'leftovers',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/ddanj/leftovers',
              },
            ],
          },
          content: {
            body: [
              `The application detects the foods in pictures the user takes and finds recipes for dishes that can be made from those foods. [Built for Los Altos Hacks]`,
            ],
          },
        },
        {
          header: {
            title: 'CloseCans',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/CloseCans',
              },
            ],
          },
          content: {
            body: [
              `A react-native application that finds trash, recycling, and compost bins near to the user. [Built for LA Hacks]`,
            ],
          },
        },
      ],
    },

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
              `Additionally, as part of the <a href="https://www.elevatethefuture.org" target="_blank">ETF</a>'s founding team, I advised on executive decisions and worked to expand our influence to over 40+ chapters around the world. Also, we are constantly working on implementing new events. Besides this, I help update/design our website.`,
            ],
            dates: 'Jul 2019 - Present',
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

    awards: {
      title: 'Awards & Certifications',
      data: [
        {
          header: {
            title: '2nd Place Media Track',
            subtitle: 'PickHacks 2021',
          },
          content: {
            body: [
              `YouTube Mentions: This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side.`,
            ],
            icons: [
              {
                icon: 'mdi-github',
                link: 'https://github.com/keshprad/youtube-mentions',
              },
              {
                iconText: 'Devpost',
                link: 'https://devpost.com/software/youtube-mentions',
              },
              {
                icon: 'mdi-youtube',
                link: 'https://www.youtube.com/watch?v=O9BwcoK1fEM',
              },
            ],
            dates: 'Apr 2021',
          },
        },
        {
          header: {
            title: 'Stanford Algorithms Specialization',
          },
          content: {
            body: [
              `&bull; Divide and Conquer, Sorting and Searching, and Randomized Algorithms`,
              `&bull; Graph Search, Shortest Paths, and Data Structures`,
              `&bull; Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming`,
              `&bull; Shortest Paths Revisited, NP-Complete Problems and What To Do About Them`,
            ],
            icons: [
              {
                iconText: 'Coursera',
                link:
                  'https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ',
              },
            ],
          },
        },
        {
          header: {
            title: 'Google IT Support Specialization',
          },
          content: {
            body: [
              `&bull; The Bits and Bytes of Computer Networking`,
              `&bull; IT Security: Defense against the digital dark arts`,
              `&bull; System Administration and IT Infrastructure Services`,
              `&bull; Technical Support Fundamentals`,
              `&bull; Operating Systems and You: Becoming a Power User`,
            ],
            icons: [
              {
                iconText: 'Coursera',
                link:
                  'https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/',
              },
            ],
          },
        },
      ],
    },

    education: {
      title: 'Education',
      data: [
        {
          header: {
            title: 'Lynbrook High School',
          },
          content: {
            body: [
              `Head of Front End @ <a href="https://lhswebdev.github.io/">Lynbrook WebDev</a>: WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.`,
              `Vice-President @ Lynbrook Me to We: Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations.`,
            ],
            dates: '2017 - 2021',
          },
        },
      ],
    },
  }),
  head() {
    return {
      title: 'Portfolio',
    }
  },
}
</script>

<style scoped>
.content {
  max-width: 1000px;
  margin-bottom: 50px;
}
#footer {
  margin-top: 50px;
}
</style>
