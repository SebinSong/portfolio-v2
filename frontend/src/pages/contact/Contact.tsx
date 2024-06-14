// child components
import { FormEvent } from "react"
import { useImmer } from "use-immer"
import PageTemplate from "../PageTemplate"
import ContactPageAnimation from "./contact-page-animation/ContactPageAnimation"

// utils
import useValidation from '~/hooks/useValidation'

import './Contact.scss'

type FormKeyUnion = 'name' | 'email' | 'title' | 'content'

export default function Contact () {
  // local-state
  const [form, updateForm] = useImmer({
    name: '',
    email: '',
    title: '',
    content: ''
  })
  const {
    isErrorActive,
    clearFormError
  } = useValidation(form, [])

  // methods
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault()
  }

  const updateFactory = (key: FormKeyUnion) => {
    return (e: any) => {
      const val = e.target.value

      updateForm(draft => {
        draft[key] = val
      })

      if (isErrorActive(key)) {
        clearFormError()
      }
    }
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
              <input className='input' type='text' placeholder='Your name'
                onInput={updateFactory('name')} data-vkey='name' />
            </div>

            <div className='form-field mail-field'>
              <label className='label-common'>E-mail :</label>
              <input className='input' type='text' placeholder='Your e-mail address'
                onInput={updateFactory('email')} data-vkey='email' />
            </div>
          </div>

          <div className='form-field'>
            <label className='label-common'>Title :</label>
            <input className='input' type='text' placeholder='Enter title'
              onInput={updateFactory('title')} data-vkey='title' />
          </div>

          <div className='form-field'>
            <label className='label-common'>Message :</label>
            <textarea className='textarea' placeholder='Message content'
              onInput={updateFactory('content')} data-vkey='content' />
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
