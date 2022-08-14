<template>
  <div id="portfolio">
    <Intro />
    <v-container class="content">
      <PortfolioCardList :title="education.title" :data="education.data" />
      <PortfolioCardList
        :title="workExperience.title"
        :data="workExperience.data"
      />
      <PortfolioCardList :title="projects.title" :data="projects.data" />
      <PortfolioCardList
        :title="awardsAndCertifications.title"
        :data="awardsAndCertifications.data"
      />
    </v-container>
  </div>
</template>

<script>
import PortfolioCardList from '~/components/PortfolioCardList'
import Intro from '~/components/Intro'

export default {
  components: {
    PortfolioCardList,
    Intro,
  },
  data: () => ({
    education: {
      title: 'Education',
      data: [
        {
          title: 'University of Maryland, College-Park',
          subtitle: 'BS in Computer Science and Statistics',
          imgSrc: ['/img/education/umd-logo.png'],
          id: 'umd',
          body: [
            [
              '- Fellow at <a href="https://startupshell.org">StartupShell</a>\n' +
                '- FIRE Research program - <a href="https://www.fire.umd.edu/coml" target="_blank">Capital One Machine Learning Group</a>\n' +
                '- Presidential Scholarship\n' +
                '- Tutor for STAT 100 (Elem. Stats and Prob.) & MATH 140/141 (Calc)\n',
            ],
            [
              "- Dean's List: Fall 2021, Spring 2022\n" +
                '- GPA: 3.963\n' +
                '- Select Coursework:\n' +
                '\t- CMSC 351: Algorithms\n' +
                '\t- CMSC 216: Intro to Computer Systems\n',
            ],
          ],
          dates: 'Aug 2021 - Dec 2024',
        },
        {
          title: 'Lynbrook High School',
          id: 'lhs',
          body: [
            `- GPA: 3.88\n` +
              `- Head of Front-End/Back-End @ <a href="https://lhswebdev.github.io/" target="_blank">Lynbrook WebDev</a>:\n` +
              `\t- WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.\n` +
              `- Vice-President @ Lynbrook Me to We:\n` +
              `\t- Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations.`,
          ],
          dates: '2017 - 2021',
        },
      ],
    },
    workExperience: {
      title: 'Work Experience',
      data: [
        {
          title: 'Curie AI',
          subtitle: 'Software Engineer Intern',
          imgSrc: [],
          links: [
            {
              icon: 'mdi-link-variant',
              href: 'https://curieai.com',
              target: '_blank',
            },
          ],
          body: [
            `- Developed backend microservices for integrating EHR systems with Curie services and deployed with Kubernetes.\n` +
              `- Created a wrapper API and a data transformer, enabling Curie to retrieve data on patients' medical records.\n` +
              `- Read my reflection on my experience at Curie [here](/writing/curie-ai-internship-summer-22).`,
          ],
          dates: 'Jun 2021 - Aug 2021',
        },
        {
          title: "Chaos Genius (YC '20)",
          subtitle: 'Software Engineer Intern',
          imgSrc: ['/img/work-experience/chaos-genius-dashboard.gif'],
          tldr:
            'Worked on algos for automated Root Cause Analysis and Anomaly Detection for time series data.',
          links: [
            {
              icon: 'mdi-github',
              href: 'https://github.com/chaos-genius/chaos_genius',
              target: '_blank',
            },
            {
              icon: 'mdi-link-variant',
              href: 'https://chaosgenius.io',
              target: '_blank',
            },
          ],
          body: [
            `- Worked on algorithms for Root Cause Analysis and Anomaly Detection for time series data.\n` +
              `- Engineered a KPI validation feature, and developed an anomaly severity scoring algorithm.\n` +
              `- Created the anomaly detection visualization, and performed extensive algorithm and product testing and bug fixes.\n` +
              `- Authored a blog post, <a href="https://chaosgenius.io/blog/a-brief-history-of-anomaly-detection/" target="_blank">"A Brief History of Anomaly Detection"</a>.`,
          ],
          dates: 'Jun 2021 - Aug 2021',
        },
        {
          title: 'dsapps',
          subtitle: 'Software Engineer Intern',
          body: [
            `- Worked on a project in forecasting resource requirements for tasks based on historical patterns.\n` +
              `- Performed text processing/cleaning, handled mixed data, experimented with k-means clustering for data analysis.`,
          ],
          dates: 'Jun 2020 - Sept 2020',
        },
        {
          title: 'Elevate the Future',
          subtitle: 'Director of Project Falcon',
          imgSrc: ['/img/work-experience/elevate-the-future.png'],
          tldr:
            'Directed project to build websites for 30+ local businesses amongst the COVID pandemic',
          body: [
            `- Founded and directed Project Falcon to develop websites for 30+ local businesses amidst the pandemic.\n` +
              `- Conducted technical workshops for youth and led team of 20+ in website development for businesses.`,
          ],
          dates: 'Jul 2019 - May 2021',
        },
      ],
    },
    projects: {
      title: 'Projects',
      data: [
        {
          title: 'YouTube Mentions',
          subtitle: '2nd Place Media Track @ PickHacks 2021',
          imgSrc: ['/img/projects/youtube-mentions.gif'],
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
          tldr:
            'Uses Named Entity Recognition to generate cards with relevant context for a given YouTube video',
          body: [
            `- This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side.\n` +
              `- Awards:\n` +
              `\t- 2nd Place Media Track @ PickHacks 2021`,
          ],
        },
        {
          title: 'Path Visualizer',
          imgSrc: ['/img/projects/path-visualizer.gif'],
          links: [
            {
              icon: 'mdi-github',
              href: 'https://github.com/keshprad/path-visualizer',
            },
            {
              icon: 'mdi-link-variant',
              href: 'https://keshprad.github.io/path-visualizer',
            },
          ],
          // tldr: 'A Pathfinding Visualizer',
          body: [
            `A web app for visualizing pathfinding algorithms built in Svelte. View [here](https://path-visualizer.keshprad.ml)!\n` +
              `- Algorithms: A* search, Dijkstra's\n` +
              `- Grid Types: Recursive Division Maze, Simple Random Grid, Blank Grid`,
          ],
        },
        {
          title: 'Best Comeback',
          imgSrc: ['/img/projects/best-comeback.gif'],
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
          // tldr: 'Automatically generates "Deal With It" gifs',
          body: [
            `Want to end an argument with a win? This repo uses facial landmarks to automatically generate a "Deal With It" gif from an input image.`,
          ],
        },
        {
          title: 'Autoscriber',
          imgSrc: ['/img/projects/autoscriber-app.gif'],
          links: [
            {
              icon: 'mdi-github',
              href: 'https://github.com/autoscriber-app',
              target: '_blank',
            },
            {
              icon: 'mdi-link-variant',
              href: 'https://autoscriber-app.github.io/',
              target: '_blank',
            },
          ],
          tldr:
            'PWA for automatic online meeting notes using speech recognition and NLP.',
          body: [
            `- Autoscriber is a progressive web app (PWA) that listens to your microphone audio, transcribes your speech, and summarizes your meeting in bullet point format.\n` +
              `- During the meeting, participants simply open a session link and turn on their microphone.\n` +
              `- Once the meeting is over, Autoscriber will use AI language models to analyze the conversation and jot down important sentences automatically.`,
          ],
        },

        {
          title: 'Algorithms',
          id: 'algorithms-repo',
          links: [
            {
              icon: 'mdi-github',
              href: 'https://github.com/keshprad/Algorithms',
            },
          ],
          body: [
            `A repository full of various algorithms and data structures that I find interesting.`,
          ],
        },
        {
          title: 'competitive programming',
          links: [
            {
              icon: 'mdi-github',
              href: 'https://github.com/keshprad/competitive-programming',
            },
          ],
          body: [`competitive programming practice solutions`],
        },
      ],
    },
    awardsAndCertifications: {
      title: 'Awards & Certifications',
      data: [
        {
          title: '2nd Place Media Track',
          id: 'pickhacks-2021',
          subtitle: 'PickHacks 2021',
          imgSrc: ['/img/projects/youtube-mentions.gif'],
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
          tldr:
            'Uses Named Entity Recognition to generate cards with relevant context for a given YouTube video',
          body: [
            `YouTube Mentions: This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side.`,
          ],
          dates: 'Apr 2021',
        },
        {
          title: 'Stanford Algorithms Specialization',
          id: 'stanford-algos',
          imgSrc: ['/img/awards-and-certifications/stanford-algorithms.png'],
          links: [
            {
              iconText: 'Coursera',
              href:
                'https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ',
              target: '_blank',
            },
          ],
          body: [
            `**Courses:**\n` +
              `- Divide and Conquer, Sorting and Searching, and Randomized Algorithms\n` +
              `- Graph Search, Shortest Paths, and Data Structures\n` +
              `- Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming\n` +
              `- Shortest Paths Revisited, NP-Complete Problems and What To Do About Them`,
          ],
        },
        {
          title: 'Google IT Support Specialization',
          id: 'google-it',
          imgSrc: ['/img/awards-and-certifications/google-it.png'],
          links: [
            {
              iconText: 'Coursera',
              href:
                'https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/',
              target: '_blank',
            },
          ],
          body: [
            `**Courses:**\n` +
              `- The Bits and Bytes of Computer Networking\n` +
              `- IT Security: Defense against the digital dark arts\n` +
              `- System Administration and IT Infrastructure Services\n` +
              `- Technical Support Fundamentals\n` +
              `- Operating Systems and You: Becoming a Power User`,
          ],
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
  max-width: 1024px;
  margin-bottom: 50px;
}
</style>
