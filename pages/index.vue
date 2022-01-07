<template>
  <div id="portfolio">
    <Intro />
    <v-container class="content">
      <CardList :title="education.title" :data="education.data" />
      <CardList :title="workExperience.title" :data="workExperience.data" />
      <CardList :title="projects.title" :data="projects.data" />
      <CardList
        :title="awardsAndCertifications.title"
        :data="awardsAndCertifications.data"
      />
    </v-container>
  </div>
</template>

<script>
import CardList from '~/components/CardList'
import Intro from '~/components/Intro'

export default {
  components: {
    CardList,
    Intro,
  },
  data: () => ({
    education: {
      title: 'Education',
      data: [
        {
          title: 'University of Maryland, College-Park',
          subtitle: 'BS in Computer Science and Math(Stats)',
          imgSrc: ['/img/education/umd-logo.png'],
          id: 'umd',
          body: [
            [
              '- Tutor for STAT 100 (Elem. Stats and Prob.) & MATH 140 (Calc 1)\n' +
                '- FIRE Research program - <a href="https://www.fire.umd.edu/coml" target="_blank">Capital One Machine Learning Group</a>\n' +
                '- Presidential Scholarship',
            ],
            [
              '- GPA: 4.00\n' +
                '- Select Coursework:\n' +
                '\t- CMSC 132: Object-oriented Programming II\n' +
                '\t- STAT 400: Applied Probability and Statistics I\n\n' +
                "- Dean's List",
            ],
          ],
          dates: '2021 - 2025',
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
          title: 'Chaos Genius',
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
            `- Worked on algorithms for automated Root Cause Analysis and Anomaly Detection for time series data.\n` +
              `- Engineered a KPI validation feature, and developed an anomaly severity scoring algorithm.\n` +
              `- Created the anomaly detection visualization, and performed extensive algorithm and product testing and bug fixes.\n` +
              `- Wrote a blog post, <a href="https://chaosgenius.io/blog/a-brief-history-of-anomaly-detection/" target="_blank">"A Brief History of Anomaly Detection"</a> and generated documentation for RCA and Anomaly Detection.`,
          ],
          dates: 'Jun 2021 - Aug 2021',
        },
        {
          title: 'dsapps',
          subtitle: 'Software Engineer Intern',
          body: [
            `- Worked on a project in forecasting resource requirements for tasks captured in Salesforce based on historical patterns.\n` +
              `- Performed text processing/cleaning, handled mixed data, experimented with k-means clustering for data analysis.`,
          ],
          dates: 'Jun 2020 - Sept 2020',
        },
        {
          title: 'Elevate the Future',
          subtitle: 'Director of Project Falcon',
          imgSrc: ['/img/work-experience/elevate-the-future.png'],
          tldr:
            'Directed project to build websites for local businesses amongst the COVID pandemic',
          body: [
            `- Created and directed Project Falcon, which developed websites for local businesses amidst the COVID pandemic.\n` +
              `- Trained youth in WebDev skills and led the team in website development and communication with businesses.`,
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
              href: 'https://path-visualizer.keshprad.ml',
            },
          ],
          tldr: 'A Pathfinding Visualizer',
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
          tldr: 'Automatically generates "Deal With It" gifs',
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
  max-width: 1000px;
  margin-bottom: 50px;
}
#footer {
  margin-top: 50px;
}
</style>

// Global Styles
<style>
.fill-animation,
div.md a {
  color: var(--v-anchor-base);
  text-decoration: none;
  border: none;
  border-bottom: 2px solid var(--v-anchor-base);
  background-image: linear-gradient(
    120deg,
    var(--v-anchor-base),
    var(--v-anchor-base)
  );
  background-size: 100% 0;
  background-position: 0 100%;
  transition: background-size 0.125s ease-in, color 0.125s ease-in;
}
.fill-animation:hover,
div.md a:hover {
  color: var(--v-text1-base);
  border-color: var(--v-anchor-base);
  background-size: 100% 100%;
}
</style>
