import { genId } from '~/view-utils'

export interface TestimonialEntry {
  id: string,
  name: string,
  role: string,
  organization: string,
  content: string,
}

const testimonialData: Array<TestimonialEntry> = [
  {
    id: genId(),
    name: 'Daniel Taylor',
    role: 'Web Developer Manager',
    organization: 'Heartland Bank Ltd',
    content: "We are satisfied that Sebin has the right attitude, qualifications, experience and integrity " +
      "making him the right fit for the role and has the potential to grow further."
  },
  {
    id: genId(),
    name: 'Greg Slepak',
    role: 'President',
    organization: 'okTurtles Foundation',
    content: "Sebin has demonstrated that he is a very quick learner, creative, responsible, and eager to deliver user-friendly solutions. " +
      "His contributions were (and continue to be) highly appreciated and valued."
  },
  {
    id: genId(),
    name: 'Sriram Annayan',
    role: 'Delivery Manager',
    organization: 'Heartland Bank Ltd',
    content: "Sebin is a great team player and has got good work ethics. " + 
      "He's very eager to learn and grow himself. Sebin is usually proactive and identified several project risks at the right time, which helped me personally while delivering projects. " + 
      "I wish him all the best for his future endeavors."
  }
]

export default testimonialData
