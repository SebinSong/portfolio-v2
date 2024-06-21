export interface ProjectItem {
  id: string,
  name: string,
  description: string,
  years: number | { from: number, to: number },
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
    years: { from: 2023, to: 2024 },
    projectType: 'company-work',
    description: "It's an online booking website for a fontune-telling & mental care business in South Korea. " +
      'Customers can make a booking / modify the schedule by themselves and ' +
      ' the owner can manage the reservations in the admin pages. (e.g. confirm/cancel reservations, send web SMS to the customers, update Google calendar)',
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
    years: 2024,
    projectType: 'personal',
    description: 'Brand-new personal website of mine that is built with React, Typescript and ExpressJS. hosted via Render.',
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
    years: 2018,
    description: 'My very first dev-portfolio website built with VueJS and GSAP which has various creative HTML5 Canvas and SVG animations.',
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
    years: 2021,
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
    years: 2022,
    projectType: 'company-work',
    description: "A demo web dashboard for a company's product named 'Chelonia'.<br>" +
      "It's built with dummy data. There was no design provided. " +
      'So I researched and created the design system of the project on my own.',
    links: {
      app: 'https://sebinsong.github.io/chelonia-dashboard-preview/',
      github: 'https://github.com/okTurtles/group-income/pull/1483'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2' , 'Creative Animation', 'ThreeJS'],
    madeAt: 'okTurtles',
    isIndividuaWork: true
  },
  {
    id: 'confetti-animation',
    name: 'Confetti animation',
    years: 2020,
    projectType: 'company-work',
    description: 'The web-app GroupIncome needed a confetti animation on a certain page and I created three candidates of SVG animation' +
      'for the designer and the project manager to choose from. (The option 2 there was selected)',
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
    years: { from: 2023, to: 2024 },
    projectType: 'company-work',
    description: "Worked on building a re-designed website for the company's web-app named 'Group Income'.",
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
    years: { from: 2022, to: 2023 },
    projectType: 'company-work',
    description: "A documentation website for a company's project named 'Shelter-protocol'. " +
      "Worked on converting the entire theme of the web-site to Astro star-light style.",
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
    years: { from: 2019, to: 2024 },
    projectType: 'company-work',
    description: "The largest VueJS project (web accounting tool) at the company." +
      "Implemented various UI designs and front-end functionalities. " +
      "Also worked on the backend as part of some complex tasks (e.g. creating a PWA of the app). " +
      "Wrote and updated the cypress end-to-end test-suites.",
    links: {
      app: 'https://groupincome.org/',
      github: 'https://github.com/okTurtles/group-income/pulls?q=is%3Apr+assignee%3A%40me'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Flow Typer', 'Vue 2', 'Pug', 'Cypress', 'Grunt', 'PWA', 'WebSockets', 'Node', 'Hapi'],
    isIndividuaWork: false
  },
  {
    id: 'okturtles-org',
    name: 'okTurtles.org',
    years: { from: 2023, to: 2024 },
    projectType: 'company-work',
    description: "The main company website of okTutles Foundation Inc. " +
      "Worked on converting the outdated static website to a modern AstroJS driven multi-page application.",
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
    years: { from: 2020, to: 2024 },
    projectType: 'company-work',
    description: "A hybrid mobile-app built with VueJS and Capacitor (A single JS code-base serves both the web-app and the mobile-app). " +
      "Implemented various user application flows with the REST API integration." +
      "Constantly worked on building reusable UI components. " +
      "Successfully delivered the design-refresh of the entire app two times (V2.0.0 in 2021 and V4.0.0 in 2024).",
    links: {
      app: 'https://play.google.com/store/apps/details?id=nz.co.heartland.mobileapp.android'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Webpack', 'Vue 2', 'Vue 3', 'Cypress'],
    isIndividuaWork: false
  },
  {
    id: 'heartland-finance-app',
    name: 'Heartland Finance Mobile-app',
    years: 2023,
    projectType: 'company-work',
    description: "A hybrid mobile-app project built with Vue3/Typescript and Capacitor." +
      "Worked on adding a loan application flow to the app which invloved the REST API integration as well as building resuable UI components.",
    links: {
      app: 'https://play.google.com/store/apps/details?id=au.com.heartlandfinance.mobileapp'
    },
    skillset: ['HTML', 'SCSS', 'Javascript', 'Typescript', 'Vue 3', 'Vite'],
    isIndividuaWork: false
  },
  {
    id: 'heartland-design-system',
    name: 'Heartland NZ Mobile-app Component Library',
    years: { from: 2020, to: 2024 },
    projectType: 'company-work',
    description: 'A component library page of Heartland NZ Mobile-app project. I designed & created it by myself. ' +
      'I decided to build a page where developers can see all reusable UI components of the project in one place. ' +
      'Has received great feedbacks from designers, front-end developers and project managers at the company.',
    links: {
      app: 'https://digital.heartland.co.nz/#/design-system'
    },
    skillset: ['HTML', 'SCSS', 'Design', 'Javascript', 'Vue 2', 'Webpack'],
    isIndividuaWork: true
  }
]

export default projectData
