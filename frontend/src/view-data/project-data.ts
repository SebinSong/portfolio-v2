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
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'React', 'Redux', 'MongoDB', 'Node', 'Express', 'Vite', 'Google API'],
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
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Typescript', 'React', 'Express', 'Vite', 'Creative Animation', 'SVG'],
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
    name: 'A design student portfolio',
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
    skillset: ['HTML', 'SCSS', 'Javascript', 'Typescript', 'Vue 3', 'Astro', 'Vite'],
    isIndividuaWork: false
  },
  {
    id: 'shelter-protocol',
    name: 'Shelter-protocol.net',
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
    id: 'groupincome',
    name: 'Group Income',
    projectType: 'company-work',
    description: "GroupIncome is a VueJS web accounting-tool at the company. " +
      "Implemented various UI designs and front-end functionalities in the project. " +
      "The company has back-end team but I've worked on updating the backend too as part of my tasks (e.g. creating a PWA of the app). " +
      "Wrote and updated the cypress E2E test-suites for various features and user-flows of the app.",
    links: {
      app: 'https://groupincome.org/',
      github: 'https://github.com/okTurtles/group-income/pulls?q=is%3Apr+assignee%3A%40me'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Flow Typer', 'Vue 2', 'Cypress', 'Grunt', 'PWA', 'WebSockets', 'Node', 'Hapi'],
    isIndividuaWork: false
  },
  {
    id: 'okturtles-org',
    name: 'okTurtles.org',
    projectType: 'company-work',
    description: "The project is the main company introduction website of okTutles Foundation Inc. " +
      "The project used to be a static website with very outdated source-code, " +
      "So I converted the entire project into a modern AstroJS driven multi-page application at the company owner's request." +
      "Also worked on various design updates and bug-fixes.",
    links: {
      app: 'https://okturtles.org/',
      github: 'https://github.com/okTurtles/okturtles.org/pulls?q=is%3Apr+assignee%3A%40me'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Astro', 'Vite'],
    isIndividuaWork: false
  },
  {
    id: 'nz-mobile-app',
    name: 'Heartland NZ Mobile-app',
    projectType: 'company-work',
    description: "It's a hybrid mobile-app built by VueJS and Capacitor, meaning a single Javascript code-base serves both the web-app and the mobile-app. " +
      "The maintenance tasks are mainly implementing the design or adding new features or user-flows with the REST API integration." +
      "Was assigned to and successfully delivered the design-refresh of the entire project two times (V2.0.0 in 2021 and V4.0.0 in 2024).",
    links: {
      app: 'https://play.google.com/store/apps/details?id=nz.co.heartland.mobileapp.android'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Webpack', 'Vue 2', 'Vue 3', 'Cypress'],
    isIndividuaWork: false
  },
  {
    id: 'heartland-finance-app',
    name: 'Heartland Finance Mobile-app',
    projectType: 'company-work',
    description: "A hybrid mobile-app project built with Vue3/Typescript and Capacitor." +
      "Worked on adding a user-flow to the app which invloved implementing the design as well as integrating the REST APIs.",
    links: {
      app: 'https://play.google.com/store/apps/details?id=au.com.heartlandfinance.mobileapp'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Typescript', 'Vue 3', 'Vite'],
    isIndividuaWork: false
  },
  {
    id: 'heartland-design-system',
    name: 'Heartland NZ Mobile-app Component Library',
    projectType: 'company-work',
    description: 'This is a component library page of Heartland NZ Mobile-app project, which I designed & created on my own. ' +
      'NZ mobile-app is a huge project and I decided to build this page so that all developers can easily understand the design-system of the project ' +
      'and can also see various reusable Vue components in one place and quickly figure out how to use them. ' +
      'This work have received good feedbacks from the fellow front-end developers and the project manager.',
    links: {
      app: 'https://digital.heartland.co.nz/#/design-system'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2', 'Webpack'],
    isIndividuaWork: true
  }
]

export default projectData
