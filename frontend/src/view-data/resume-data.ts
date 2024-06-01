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
      'Built and maintained a booking website for fortune-telling service using MERN stacks.',
      'Frequently discussed with the business owner on the Design/UX and various features in the admin pages.',
      'Implemented the front-end state management for the user flow in the customer pages using Redux',
      'Created the Restful APIs for CRUD operations to the DB as well as ' +
      'integrating third party web-services (e.g. Google Calendar API, Web SMS service)',
      'Still sporadically maintaining the website for improving the admin pages and updating with the customer feedbacks.'
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
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2', 'Vue 3', 'React', 'Cypress', 'AstroJS', 'Grunt', 'Vite', 'PWA', 'Web-Sockets'],
    descriptions: [
      'Build and mainatain the front-end of various high-quality websites and web-applications of the company.',
      {
        text: "Working on building a VueJS web-application of the company named 'Group Income'. " +
          "Closely collaborating with designer, back-end team, project manager and other front-end developers. " +
          "Writing end-to-end test suites of various user flow of the app using Cypress. " +
          "Creating the PWA of this website was one of many tasks I've done for this project.",
        link: 'https://github.com/okTurtles/group-income/pulls?q=is%3Aclosed+is%3Apr+assignee%3A%40me'
      },
      {
        text: 'Maintaining/building a few AstroJS websites, which are groupincome.org, shelter-protocol.net to name a few. ' +
          "Gained in-depth expertise of this tool from working on converting the whole source-code of an outdated webiste named 'okTurtles.com' to a modern AstroJS project.",
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
      'Maintained two hybrid mobile-apps built using VueJS which are Heartland NZ mobile-app and Heartland Finance. ',
      'As part of maintenance of the NZ mobile-app, worked on the design-refresh project of the entire app twice. (Release V2.0.0 in 2021 and also Release V4.0.0 in 2024)',
      'Tasks often requires integrating the Restful APIs developed by the back-end team.',
      'Closely communitcated and collobrated with other teams at the organization such as, Design, UX, Back-end, QA and the project manager.'
    ]
  }
]

export default resumeData
