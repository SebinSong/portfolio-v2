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
    stacks: ['HTML & SCSS', 'Javascript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Google API'],
    descriptions: [
      'Built and maintained a booking website for fortune-telling service using MERN stacks.',
      'Frequently discussed with the business owner on the Design/UX and various features of the admin pages.',
      'Implemented the front-end state management using Redux and created the Restful APIs for CRUD operations to the DB as well as ' +
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
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2', 'Vue 3', 'React', 'AstroJS', 'PWA', 'Web-Sockets'],
    descriptions: [
      'Build and mainatain front-end of high-quality websites and web-applications of the company',
      {
        text: 'Worked on converting an outdated website source-code to a modern source code with AstroJS',
        link: 'https://github.com/okTurtles/okturtles.org/pull/65'
      },
      {
        text: "Working on implementing the front-end of a VueJS web-application named 'Group Income'. " +
          "Closely collaborating with the designer, back-end team, the project manager and fellow front-end developers. " +
          "Creating the PWA of this website was one of many tasks I've done for this project.",
        link: 'https://github.com/okTurtles/group-income/pulls?q=is%3Aclosed+is%3Apr+assignee%3A%40me'
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
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2', 'Vue 3', 'CapacitorJS'],
    descriptions: [
      'Maintained two hybrid mobile-apps and websites of the company using modern javascript technologies like VueJS and CapacitorJS',
      'Implement design-system, build various reusable UI components of the app and integrate the Restful APIs the back-end team delivers',
      'Closely communitcate and collobrate with other teams such as, Design, UX, Back-end and QA'
    ]
  }
]

export default resumeData