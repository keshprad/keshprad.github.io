<template>
  <div id="portfolio">
    <v-container class="content">
      <Accordion
        id="projects"
        :title="courses.title"
        :subtitle="courses.subtitle"
        :data="courses.data"
      />
    </v-container>
  </div>
</template>

<script>
import Accordion from '~/components/Accordion'

export default {
  components: {
    // CardList,
    Accordion,
  },
  data: () => ({
    courses: {
      title: 'Courses',
      subtitle:
        "Most of these GitHub repos are private to follow UMD's academic honor policies. You cannot view these repos unless given access.",
      data: [
        {
          header: {
            title: 'Introduction to Computer Systems (CMSC 216)',
            subtitle: 'Grade: A',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/umd-cmsc216',
              },
            ],
          },
          content: {
            body: [
              `# umd-cmsc216`,
              `**My repo for CMSC216 (Intro to Computer Systems) taught by Larry Herman at UMD.**`,
              `## Projects`,
              `- [project01](https://github.com/keshprad/umd-cmsc216/tree/master/project01): Basic Functions (classifying triangles; reversing digits in a number; catalan)\n` +
                `- [project02](https://github.com/keshprad/umd-cmsc216/tree/master/project02): File I/O: Line length checking and replacing tabs with spaces\n` +
                `- [project03](https://github.com/keshprad/umd-cmsc216/tree/master/project03): Manipulating machine instructions of a fictional simple processor by "Nelovo"\n` +
                `- [project04](https://github.com/keshprad/umd-cmsc216/tree/master/project04): (Ext. of proj3) Running machine instructions on a "Nelovo" processor.\n` +
                `- [project05](https://github.com/keshprad/umd-cmsc216/tree/master/project05): Create an optimal makefile for the given source code.\n` +
                `- [project06](https://github.com/keshprad/umd-cmsc216/tree/master/project06): A small simulation of the filesystem component of the "Ournix" operating system. Models a few common filesystem commands.\n` +
                `- [project07](https://github.com/keshprad/umd-cmsc216/tree/master/project07): Checking the word count of input text using a child process and exec() to execute the unix wc command.\n` +
                `- [project08](https://github.com/keshprad/umd-cmsc216/tree/master/project08): A simplified version of Make/Makefile using system calls, child processes, exec() calls.\n` +
                `- [project09](https://github.com/keshprad/umd-cmsc216/tree/master/project09): Various functions in assembly (reversing digits in a number; iterative catalan; recursive catalan)\n` +
                `- [project10](https://github.com/keshprad/umd-cmsc216/tree/master/project10): Adding threading to a grep-like program which counts the number of occurrences of a keyword across multiple files`,
            ],
          },
        },
        {
          header: {
            title: 'Discrete Structures (CMSC 250)',
            subtitle: 'Grade: A-',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/umd-cmsc250',
              },
            ],
          },
          content: {
            body: [
              `# umd-cmsc250`,
              `**My repo for CMSC250 (Discrete Structures) taught by Mohammad Nayeem Teli at UMD.**`,
              `## Homework:`,
              `[[hw01](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw01.pdf)] [[hw02](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw02.pdf)] [[hw03](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw03.pdf)] [[hw04](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw04.pdf)] [[hw05](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw05.pdf)] [[hw06](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw06.pdf)] [[hw07](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw07.pdf)] [[hw08](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw08.pdf)] [[hw09](https://github.com/keshprad/umd-cmsc250/blob/main/hw/hw09.pdf)]`,
            ],
          },
        },
        {
          header: {
            title: 'Calculus III (MATH 241)',
            subtitle: 'Grade: A+',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/umd-math241',
              },
            ],
          },
          content: {
            body: [
              `# umd-math241`,
              `My repo for MATH241 (Calculus III) taught by Justin Wyss-Gallifent at UMD.`,
              `## Matlabs`,
              `[matlab1](https://github.com/keshprad/umd-math241/blob/main/matlab1.m) | [matlab2](https://github.com/keshprad/umd-math241/blob/main/matlab2.m) | [matlab3](https://github.com/keshprad/umd-math241/blob/main/matlab3.m) | [matlab4](https://github.com/keshprad/umd-math241/blob/main/matlab4.m)`,
            ],
          },
        },
        {
          header: {
            title: 'Object Oriented Programming II (CMSC 132)',
            subtitle: 'Grade: A+',
            links: [
              {
                icon: 'mdi-github',
                href: 'https://github.com/keshprad/umd-cmsc132',
              },
            ],
          },
          content: {
            body: [
              `# umd-cmsc132`,
              `My repo for CMSC132 (Object-Oriented Programming II) taught by Larry Herman at UMD.`,
              `## Projects`,
              `- [proj1](https://github.com/keshprad/umd-cmsc132/tree/main/proj1): Maintaining a bus terminal\n` +
                `- [proj2](https://github.com/keshprad/umd-cmsc132/tree/main/proj2): Managing TAs for courses at UMD\n` +
                `- [proj3](https://github.com/keshprad/umd-cmsc132/tree/main/proj3): LinkedList implementation\n` +
                `- [proj4](https://github.com/keshprad/umd-cmsc132/tree/main/proj4): Recursion solutions\n` +
                `- [proj5](https://github.com/keshprad/umd-cmsc132/tree/main/proj5): Add an iterator to proj3\n` +
                `- [proj6](https://github.com/keshprad/umd-cmsc132/tree/main/proj6): Polymorphic Binary Search Tree implementation\n` +
                `- [proj7](https://github.com/keshprad/umd-cmsc132/tree/main/proj7): Maintaining a bus terminal (this time with HashMaps/Sets)\n` +
                `- [proj8](https://github.com/keshprad/umd-cmsc132/tree/main/proj8): Directed, Weighted Graph implementation\n` +
                `- [proj9](https://github.com/keshprad/umd-cmsc132/tree/main/proj9): Representation of a social network with graphs (extension of proj8)`,
            ],
          },
        },
      ],
    },
  }),
  head() {
    return {
      title: 'UMD Courses',
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
