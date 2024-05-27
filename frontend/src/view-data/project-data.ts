export interface ProjectItem {
  id: string,
  name: string,
  description: string,
  projectType: 'personal' | 'company-work', 
  links?: { [key: string]: string },
  skillset: string[],
  madeAt?: string,
  isIndividuaWork?: boolean
}

const projectData: Array<ProjectItem> = [
  {
    id: 'ilwol-booking',
    name: 'Ilwol booking website',
    projectType: 'company-work',
    description: 'An online booking website for a small business in South Korea. ' +
      'Customers can make a booking & modify the schedule by themselves and ' +
      'the owner can do various jobs on the reservations. (e.g. confirming & cancelling a reservation, sending a web SMS to the customers)',
    links: {
      app: 'https://ilwolbooking.com',
      github: 'https://github.com/SebinSong/ilwol-booking'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'React', 'Redux', 'MongoDB', 'Node', 'Express', 'Google API'],
    madeAt: 'Ilwol Haedalbyul',
    isIndividuaWork: true
  },
  {
    id: 'portfolio-v2',
    name: 'Personal website V2.0',
    projectType: 'personal',
    description: 'Brand-new personal website built with React, Typescript and Express and hosted via Render',
    links: {
      github: 'https://github.com/SebinSong/portfolio-v2'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Typescript', 'React', 'Express', 'Creative Animation', 'SVG'],
    isIndividuaWork: true
  },
  {
    id: 'portfolio-v1',
    projectType: 'personal',
    name: 'Personal website V1.0',
    description: 'A dev-portfolio website built with Vue and GSAP which has various creative Canvas and SVG animations.',
    links: {
      app: 'https://sebinsong.github.io/',
      github: 'https://github.com/SebinSong/VueJS-Portfolio-Website'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2', 'GSAP', 'Creative Animation', 'SVG', 'Canvas'],
    isIndividuaWork: true
  },
  {
    id: 'designer-portfolio',
    name: 'Design student portfolio',
    projectType: 'personal',
    description: 'Helped building the portfolio website of a design graduate using Vue and GSAP. ' +
      'The designer was very happy with the creative UI interactions & animations I came up with for the project.',
    links: {
      app: 'https://sebinsong.github.io/Jin',
      github: 'https://github.com/SebinSong/Jin'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2', 'GSAP', 'Creative Animation', 'SVG'],
    isIndividuaWork: true
  },
  {
    id: 'chelonia-dashboard',
    name: 'Chelonia Dashboard Demo',
    projectType: 'company-work',
    description: "Built the front-end demo of the web dashboard for the company's app product named Chelonia." +
      'The task was to build the front-end pages presenting the dummy data and there was no design-system created & provided for this project. ' +
      'So I researched and created the design by myself while implementing various front-end UIs and functionalities.',
    links: {
      app: 'https://sebinsong.github.io/chelonia-dashboard-preview/',
      github: 'https://github.com/okTurtles/group-income/pull/1483'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2'],
    madeAt: 'okTurtles',
    isIndividuaWork: true
  },
  {
    id: 'confetti-animation',
    name: 'Confetti animation',
    projectType: 'company-work',
    description: 'The web-app GroupIncome needed a confetti animation on a certain page and I created three candidates of SVG animation' +
      'for the designer and the project manager to choose from. The option 2 there was selected and used in the app with additional modifications.',
    links: {
      app: 'https://sebinsong.github.io/confetti-animation/',
      github: 'https://github.com/SebinSong/confetti-animation'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2', 'Creative Animation', 'SVG'],
    madeAt: 'okTurtles',
    isIndividuaWork: true
  },
  {
    id: 'groupincome-org-v2',
    name: 'Groupincome.org V2.0',
    projectType: 'company-work',
    description: "Worked on building a re-designed website of the company's web-app named 'Group Income'.",
    links: {
      app: 'https://okturtles.github.io/groupincome.org/',
      github: 'https://github.com/okTurtles/groupincome.org/pulls?q=is%3Apr+assignee%3A%40me'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Typescript', 'Vue 3', 'Astro'],
    isIndividuaWork: false
  },
  {
    id: 'shelter-protocol',
    name: 'shelter-protocol.net',
    projectType: 'company-work',
    description: "It is a documentation website for a company's web-app named 'Shelter-protocol'. " +
      "Worked on converting the entire theme of the web-site to Astro star-light style. " +
      "Also, worked on maintaining some react UI components of the project.",
    links: {
      app: 'https://shelterprotocol.net/',
      github: 'https://github.com/okTurtles/shelterprotocol.net/pull/1'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Typescript', 'React', 'Astro'],
    isIndividuaWork: false
  },
  {
    id: 'okturtles-org',
    name: 'okTurtles.org',
    projectType: 'company-work',
    description: "The project is the main company introduction website of okTutles Foundation Inc. " +
      "The project used to be a static website with very outdated source-code, " +
      "So I converted the entire project into a modern AstroJS driven multi-page application." +
      "Also worked on various design updates and bug-fixes.",
    links: {
      app: 'https://okturtles.org/',
      github: 'https://github.com/okTurtles/okturtles.org/pulls?q=is%3Apr+assignee%3A%40me'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Astro'],
    isIndividuaWork: false
  }
]

export default projectData
