// child components
import { FormEvent } from "react"
import PageTemplate from "../PageTemplate"
import ContactPageAnimation from "./contact-page-animation/ContactPageAnimation"

import './Contact.scss'

export default function Contact () {

  // methods
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault()
  }

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

        <form onSubmit={submitHandler}>
          <div className='sender-details'>
            <div className='form-field'>
              <label className='label-common'>Name :</label>
              <input className='input' type='text' placeholder='Your name' />
            </div>

            <div className='form-field mail-field'>
              <label className='label-common'>E-mail :</label>
              <input className='input' type='text' placeholder='Your e-mail address' />
            </div>
          </div>

          <div className='form-field'>
            <label className='label-common'>Message :</label>
            <textarea className='textarea' placeholder='Message content' />
          </div>

          <div className='button-container'>
            <button className='is-custom-border send-btn' type='submit'>
              <span className='text'>Send</span>
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  )
}
