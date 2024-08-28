// utils
import testimonialData from '~/view-data/testimonials-data'
import type { TestimonialEntry } from '~/view-data/testimonials-data'
import { classNames as cn } from '~/view-utils'

import './HomeTestimonials.scss'

export default function HomeTestimonials ({
  classes = ''
}: { classes?: string }) {
  return (
    <ul className={cn('home-testimonials-list', classes)} data-test='home-testimonial-list'>
      {
        testimonialData.map((entry: TestimonialEntry) => {
          const { id, name, role, organization, content } = entry
          return (
            <li className='testimonial-card' key={id} data-test='testimonial-item'>
              <div className='testimonial-upper-section'>
                <span className='icon-wrapper'>
                  <i className='icon-user testimonial-icon'></i>
                </span>

                <div className='testimonial-details'>
                  <span className='testimonial-name is-title-style'>{name}</span>
                  <span className='testimonial-role-and-company'>
                    <span className='role'>{role}</span>
                    <span>/</span>
                    <span className='company'>{organization}</span>
                  </span>
                </div>
              </div>

              <div className='testimonial-content'>
                <span className='text'>{content}</span>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
