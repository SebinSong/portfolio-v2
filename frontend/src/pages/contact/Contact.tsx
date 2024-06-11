// child components
import PageTemplate from "../PageTemplate"
import ContactPageAnimation from "./contact-page-animation/ContactPageAnimation"

import './Contact.scss'

export default function Contact () {
  return (
    <PageTemplate classes='page-contact'>
      <ContactPageAnimation />

      <div className='page-content-wrapper'>
        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>Message me!</span>
            <span className='circle-deco'></span>
          </h1>

          <p className='page-desc'>If you would like to talk about working with me or hiring me, please leave your enquiry below.</p>
        </div>

        <p>TODO: add contact form here!</p>
      </div>
    </PageTemplate>
  )
}
