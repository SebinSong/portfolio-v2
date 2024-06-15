// child components
import { FormEvent } from "react"
import { useImmer } from "use-immer"
import PageTemplate from "../PageTemplate"
import ContactPageAnimation from "./contact-page-animation/ContactPageAnimation"
import FormErrorMessage from "~/components/FormErrorMessage"

// utils
import {
  classNames as cn,
  validateEmail
} from '~/view-utils'
import { submitInquiry } from '~/apis'
import useValidation from '~/hooks/useValidation'

import './Contact.scss'

import type { Inquiry } from '~/types/common'
type FormKeyUnion = 'name' | 'email' | 'title' | 'content'

// helpers

export default function Contact () {
  // local-state
  const [form, updateForm] = useImmer<Inquiry>({
    name: '',
    email: '',
    title: '',
    content: ''
  })
  const {
    isErrorActive,
    clearFormError,
    setFormError,
    validateAll,
    formError
  } = useValidation(form, [
    {
      key: 'email',
      check: (v: string) => validateEmail(v),
      msg: 'Please enter a valid email format'
    },
    {
      key: 'content',
      check: (v: string) => v.length > 15,
      msg: 'Message content must be longer than 15 characters'
    }
  ])

  // methods
  const submitHandler = async (e: FormEvent): Promise<any> => {
    e.preventDefault()

    // Feild validations
    // Step - 1: required field check
    const requiredFields: FormKeyUnion[] = ['name', 'email', 'content']
    for (const key of requiredFields) {
      const val = form[key]

      if (!val || val.length === 0) {
        setFormError({ key, msg: 'This field is required'})
        return
      }
    }

    if (validateAll()) {
      try {
        const result = await submitInquiry(form)
        console.log('inquiry submitted successfully - ', result)
      } catch (err) {
        console.error('Contact.tsx caught: ', err)
      }
    }
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
              <label className='label-common'>Name:</label>
              <input className={cn('input', isErrorActive('name') && 'is-error')}
                type='text' placeholder='Your name'
                onInput={updateFactory('name')}
                data-vkey='name' />

              <FormErrorMessage formKey='name' formError={formError} />
            </div>

            <div className='form-field mail-field'>
              <label className='label-common'>E-mail:</label>
              <input className={cn('input', isErrorActive('email') && 'is-error')}
                type='text' placeholder='Your e-mail address'
                onInput={updateFactory('email')} data-vkey='email' />
              
              <FormErrorMessage formKey='email' formError={formError} />
            </div>
          </div>

          <div className='form-field'>
            <label className='label-common'>
              Title:
              <span className='optional'>(Optional)</span>
            </label>
            <input className='input' type='text' placeholder='Enter title'
              onInput={updateFactory('title')} data-vkey='title' />
          </div>

          <div className='form-field'>
            <label className='label-common'>Message:</label>
            <textarea className={cn('textarea', isErrorActive('content') && 'is-error')}
              placeholder='Message content'
              onInput={updateFactory('content')} data-vkey='content' />
            {
              !isErrorActive('content') &&
              <p className='helper'>Enter minimum 15 characters.</p>
            }

            <FormErrorMessage formKey='content' formError={formError} />
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
