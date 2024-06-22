// child components
import { FormEvent, useState } from "react"
import { useImmer } from "use-immer"
import { useNavigate } from 'react-router-dom'
import PageTemplate from "../PageTemplate"
import ContactPageAnimation from "./contact-page-animation/ContactPageAnimation"
import FormErrorMessage from "~/components/FormErrorMessage"
import LoaderAnimation from '~/components/loader-animation/LoaderAnimation'
import RocketIcon from '~/components/svg-icons/RocketIcon'
import FeedbackBanner from "~/components/feedback-banner/FeedbackBanner"

// utils
import {
  classNames as cn,
  validateEmail
} from '~/view-utils'
import { submitInquiry } from '~/apis'
import useValidation from '~/hooks/useValidation'

// types
import type { Inquiry, APISubmitStatus } from '~/types/common'
type FormKeyUnion = 'name' | 'email' | 'title' | 'content'

import './Contact.scss'

export default function Contact () {
  const navigate = useNavigate()
  // local-state
  const [submitStatus, setSubmitStatus] = useState<APISubmitStatus>('idle')
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

  // computed-state
  const isSubmitting = submitStatus === 'submitting'

  // methods
  const submitHandler = async (e: FormEvent): Promise<any> => {
    e.preventDefault()

    // init the status first.
    setSubmitStatus('idle')

    // Form field validations
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
      setSubmitStatus('submitting')

      try {
        await submitInquiry(form)
        setSubmitStatus('success')
      } catch (err) {
        setSubmitStatus('error')
      }
    }
  }

  const onHomeBtnClick = () => {
    navigate('/')
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
        {
          submitStatus === 'success'
            ? <>
                <div className='page-title-container is-submit-success'>
                  <h1 className='page-title'>
                    <span className='text'>Thanks!</span>
                    <span className='circle-deco'></span>
                  </h1>
                </div>

                <div className='submit-success-container'>
                  <RocketIcon classes='rocket-icon' width={120} />

                  <p>I appreciate your interest. A confirmation e-mail will be sent to you shortly and I will respond to your message soon.</p>
                  <p>I look forward to talking to you :)</p>

                  <button className='is-custom-border go-home-btn'
                    onClick={onHomeBtnClick}>
                    <span className='text'>
                      <i className='icon-home is-prefix'></i>
                      To home
                    </span>
                  </button>
                </div>
              </>
            : <>
                <div className='page-title-container'>
                  <h1 className='page-title'>
                    <span className='text'>Message me!</span>
                    <span className='circle-deco'></span>
                  </h1>

                  <p className='page-desc'>
                    Feel free to start a chat with me :)<br/>
                    Happy to discuss about a pontential work opportunity.<br/>
                    You can also find me in <a className='is-link has-icon has-text-bold' href='https://www.linkedin.com/in/sebinsong/' target='_blank'>LinkedIn</a> too.
                  </p>
                </div>

                <form onSubmit={submitHandler}>
                  {
                    submitStatus === 'error' &&
                    <FeedbackBanner classes='mb-30' type='error' show={true}
                      message='Failed to send message. Please try again.' />
                  }
                  
                  <div className='sender-details'>
                    <div className='form-field'>
                      <label className='label-common'>
                        Name:
                        <span className='required'>(Required)</span>
                      </label>
                      <input className={cn('input', isErrorActive('name') && 'is-error')}
                        type='text' placeholder='Your name' autoComplete='off'
                        onInput={updateFactory('name')}
                        data-vkey='name' />

                      <FormErrorMessage formKey='name' formError={formError} />
                    </div>

                    <div className='form-field mail-field'>
                      <label className='label-common'>
                        E-mail:
                        <span className='required'>(Required)</span>
                      </label>
                      <input className={cn('input', isErrorActive('email') && 'is-error')}
                        type='text' placeholder='Your e-mail address' autoComplete='off'
                        onInput={updateFactory('email')} data-vkey='email' />
                      
                      <FormErrorMessage formKey='email' formError={formError} />
                    </div>
                  </div>

                  <div className='form-field'>
                    <label className='label-common'>
                      Title:
                      <span className='optional'>(Optional)</span>
                    </label>
                    <input className='input' type='text' placeholder='Enter title' autoComplete='off'
                      onInput={updateFactory('title')} data-vkey='title' />
                  </div>

                  <div className='form-field'>
                    <label className='label-common'>
                      Message:
                      <span className='required'>(Required)</span>
                    </label>
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
                    <button className='is-custom-border send-btn' type='submit' disabled={isSubmitting}>
                      <LoaderAnimation show={isSubmitting} />
                      <span className='text'>
                        <i className='icon-arrow-circle-right is-prefix'></i>
                        Send
                      </span>
                    </button>
                  </div>
                </form>
              </>
        }
      </div>
    </PageTemplate>
  )
}
