type StrOrArrayOfStr = string | string[]
type WorkType = 'Remote' | 'On-site' | 'Remote / On-site'
type ContractType = 'Part-time' | 'Full-time'
type TextOrTextWithLink = string | { text: string, link: string }
type DescriptionUnit = TextOrTextWithLink | TextOrTextWithLink[]

export interface ResumeEntry {
  id: string,
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
    name: 'Ilwol Haedalbyul',
    location: 'Bundang, Kyung-ki province, South Korea',
    roles: ['Full stack engineer', 'Design'],
    contractType: 'Part-time',
    workType: 'Remote',
    link: 'https://www.ilwolbooking.com/',
    period: { from: '2023-08', to: '2024-02' },
    stacks: ['HTML & SCSS', 'Javascript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Google API'],
    descriptions: [
      'Build and maintain a booking website for fortune-telling service using MERN stacks.',
      'Worked on every development flow of this web service alone which are,',
      [
        'Design - Research/create the design-system and various UI component designs.',
        'Front-end - Build customer pages/admin pages, implement State management and integrate the REST APIs.',
        'Back-end - Design the DB schema, Build the RESTful APIs for CRUD operations to the DB and integrating third-party web-services. (e.g. Google Calendar API, Web SMS service)',
        'Launch - Deploy the web-service to the production.'
      ],
      'Frequently discussed with the business owner on the design, UX adding various features.',
      'Still sporadically maintaining this web-app for improving the admin pages and updating with the customer feedbacks.'
    ]
  },
  {
    id: 'okturtles',
    name: 'okTurtles Foundation Inc.',
    location: 'Miami, Florida, the United States',
    roles: ['Front-end web developer'],
    contractType: 'Part-time',
    workType: 'Remote',
    link: 'https://okturtles.org',
    period: { from: '06-2022' },
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'VueJS 2 & 3', 'React', 'AstroJS', 'PWA', 'Web-Sockets'],
    descriptions: [
      'Build front-end of high-quality websites & web-application of the company',
      {
        text: 'Worked on converting an outdated website source-code to an AstroJS project',
        link: 'https://github.com/okTurtles/okturtles.org/pull/65'
      },
      {
        text: "Working on building the front-end of the company's web accounting-tool 'Group Income' with VueJS. Closely collaborating with other team members like designer, back-end engineer and other front-end developer. Took the responsibility of building the PWA of this web-application.",
        link: 'https://github.com/okTurtles/group-income/pulls?q=is%3Aclosed+is%3Apr+assignee%3A%40me'
      }
    ]
  },
  {
    id: 'heartland',
    name: 'Heartland bank Ltd.',
    location: 'Auckland, New Zealand',
    roles: ['Front-end developer'],
    contractType: 'Full-time',
    workType: 'Remote / On-site',
    link: 'https://www.heartland.co.nz/',
    period: { from: '04-2020' },
    stacks: ['HTML & SCSS', 'Javascript', 'Typescript', 'Vue 2 & 3', 'CapacitorJS'],
    descriptions: [
      'Maintained two hybrid mobile-apps and websites of the company using modern javascript technologies like VueJS and CapacitorJS',
      'Implement design-system, build various reusable UI components of the app and integrate the Restful APIs the back-end team delivers',
      'Closely communitcate and collobrate with other teams such as, Design, UX, Back-end and QA'
    ]
  }
]

export default resumeData