type WorkType = 'Remote' | 'On-site' | 'Remote / On-site'
type ContractType = 'Part-time' | 'Full-time'
type TextOrTextWithLink = string | { text: string, link: string }
type DescriptionUnit = TextOrTextWithLink | TextOrTextWithLink[]

export interface ResumeEntry {
  id: string,
  index: string,
  name: string,
  location: string,
  roles: string[],
  contractType: ContractType,
  workType: WorkType, // whether it's remote or on-site or hybrid
  link?: string, // external-link to the company website
  period: { from: string, to?: string },
  stacks: string[],
  descriptions: DescriptionUnit[]
}

const resumeData: Array<ResumeEntry> = [
  {
    id: 'ilwol',
    index: '01',
    name: 'Ilwol Haedalbyul',
    location: 'Bundang, Kyung-ki province, South Korea',
    roles: ['Full-stack engineer', 'Design'],
    contractType: 'Part-time',
    workType: 'Remote',
    link: 'https://www.ilwolbooking.com/',
    period: { from: 'Aug, 2023', to: 'Feb, 2024' },
    stacks: ['HTML & SCSS', 'Javascript', 'React', 'Redux', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Google API'],
    descriptions: [
      'Built and maintained a booking website for fortune-telling & mental-care service using MERN stacks.',
      'Frequently discussed with the business owner on the Design/UX and various features in the admin pages.',
      'Implemented the front-end state management for the customer pages using Redux',
      'Created the Restful APIs for CRUD operations to the DB as well as ' +
      'integrating third party web-services (e.g. Google Calendar API, Web SMS service)',
      'Still sporadically maintaining the website for adding features to the admin pages and updates from the customer feedbacks.'
    ]
  },
  {
    id: 'okturtles',
    index: '02',
    name: 'okTurtles Foundation Inc.',
    location: 'Miami, Florida, the United States',
    roles: ['Front-end web developer'],
    contractType: 'Part-time',
    workType: 'Remote',
    link: 'https://okturtles.org',
    period: { from: 'Jun, 2022' },
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2', 'Vue 3', 'React', 'ThreeJS', 'Cypress', 'AstroJS', 'Grunt', 'Vite', 'Pug', 'PWA', 'Web-Sockets'],
    descriptions: [
      'Build and mainatain the front-end of various high-quality websites and web-applications.',
      {
        text: "Working on building a VueJS web-app 'Group Income'. " +
          "Closely collaborating with other teams(Design / Backend / Project manager). " +
          "Writing end-to-end Cypress test suites. " +
          "Worked on creating the PWA of this web-app.",
        link: 'https://github.com/okTurtles/group-income/pulls?q=is%3Aclosed+is%3Apr+assignee%3A%40me'
      },
      {
        text: 'Maintaining a few AstroJS websites, which are groupincome.org, shelter-protocol.net to name a few. ' +
          "Or worked on coverting the source-code of an outdated project into a modern AstroJS project. (e.g. 'okTurtles.com')",
        link: 'https://github.com/okTurtles/okturtles.org/pull/65'
      }
    ]
  },
  {
    id: 'heartland',
    index: '03',
    name: 'Heartland bank Ltd.',
    location: 'Auckland, New Zealand',
    roles: ['Front-end developer'],
    contractType: 'Full-time',
    workType: 'Remote / On-site',
    link: 'https://www.heartland.co.nz/',
    period: { from: 'Apr, 2020' },
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2', 'Vue 3', 'Cypress', 'Webpack', 'Vite', 'CapacitorJS'],
    descriptions: [
      'Worked on various VueJS(2 & 3) projects of the company. ',
      'Maintained two hybrid mobile-apps built using VueJS and CapacitorJS (Heartland NZ mobile-app and Heartland Finance app). ',
      'Was a main front-end developer for the two times of design-refresh project in NZ mobile-app. (Release V2.0.0 in 2021 and Release V4.0.0 in 2024)',
      'Closely collobrated with other teams at the organization such as, Design, UX, Back-end, QA and the project manager.'
    ]
  }
]

export default resumeData
