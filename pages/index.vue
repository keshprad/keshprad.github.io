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
              `**tldr: PWA for automatic online meeting notes using speech recognition and NLP.**`,
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
            title: 'best-comeback',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/best-comeback',
              },
              {
                icon: 'mdi-image',
                href: 'https://keshprad.github.io/best-comeback/#examples',
              },
            ],
          },
          content: {
            body: [
              `Want to end an argument with a win? This repo uses facial landmarks to automatically generate a "Deal With It" gif from an input image.`,
            ],
          },
        },
        {
          header: {
            title: 'path-visualizer',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/path-visualizer',
              },
              {
                icon: 'mdi-link-variant',
                href: 'https://path-visualizer.keshprad.ml',
              },
            ],
          },
          content: {
            body: [
              `A Svelte app for visualizing pathfinding algorithms. View [here](https://path-visualizer.keshprad.ml)!`,
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
            body: [`Repo for my personal portfolio site built with Nuxt.`],
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
              `I founded and directed <a href="https://www.elevatethefuture.org/projectfalcon/" target="_blank">Project Falcon</a> — one of our most effective programs. Lead a team of officers and volunteers to build numerous websites for local businesses while simultaneously teaching WebDev skills to youth.`,
              `As part of the <a href="https://www.elevatethefuture.org" target="_blank">ETF</a>'s founding team, I advised on executive decisions and worked to expand our influence to over 40+ chapters around the world.`,
            ],
            dates: 'Jul 2019 - May 2021',
          },
        },
        {
          header: {
            title: 'Zamono',
            subtitle: 'Data Research Intern',
          },
          content: {
            body: [
              `Designed DB tables to store different disease information which formed part of Zamono’s diagnostic systems.`,
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
              `- Divide and Conquer, Sorting and Searching, and Randomized Algorithms`,
              `- Graph Search, Shortest Paths, and Data Structures`,
              `- Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming`,
              `- Shortest Paths Revisited, NP-Complete Problems and What To Do About Them`,
            ],
            icons: [
              {
                iconText: 'Coursera',
                link:
                  'https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ',
                target: '_blank',
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
              `- The Bits and Bytes of Computer Networking`,
              `- IT Security: Defense against the digital dark arts`,
              `- System Administration and IT Infrastructure Services`,
              `- Technical Support Fundamentals`,
              `- Operating Systems and You: Becoming a Power User`,
            ],
            icons: [
              {
                iconText: 'Coursera',
                link:
                  'https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/',
                target: '_blank',
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
              `**Head of Front-End/Back-End @ [Lynbrook WebDev](https://lhswebdev.github.io/):** WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.`,
              `**Vice-President @ Lynbrook Me to We:** Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations.`,
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
