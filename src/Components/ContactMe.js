import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { EnvelopeSimple, LinkedinLogo, GithubLogo, FilePdf, ArrowRight } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext.js'
import resume from '../Assets/Pdf/CV.pdf'

const FIELDS = [
  { name: 'lastName' },
  { name: 'firstName' },
  { name: 'mail', type: 'email' },
  { name: 'phone', type: 'tel' },
]

function ContactMe() {
  const { t } = useLanguage()
  const form = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null)
  const [errorField, setErrorField] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(form.current).entries())

    //eslint-disable-next-line
    const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/

    if (!values.lastName) {
      setErrorField('lastName')
      setStatus({ type: 'error', text: t.contact.errors.lastName })
      return
    }
    if (!values.firstName) {
      setErrorField('firstName')
      setStatus({ type: 'error', text: t.contact.errors.firstName })
      return
    }
    if (!mailRegex.test(values.mail)) {
      setErrorField('mail')
      setStatus({ type: 'error', text: t.contact.errors.mail })
      return
    }
    if (!phoneRegex.test(values.phone)) {
      setErrorField('phone')
      setStatus({ type: 'error', text: t.contact.errors.phone })
      return
    }
    if (!values.message) {
      setErrorField('message')
      setStatus({ type: 'error', text: t.contact.errors.message })
      return
    }

    setErrorField('')
    setStatus(null)
    setSending(true)

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setSending(false)
        setStatus({ type: 'success', text: t.contact.success })
        form.current.reset()
      })
      .catch((error) => {
        console.error(error)
        setSending(false)
        setStatus({ type: 'error', text: t.contact.errors.send })
      })
  }

  return (
    <section className='section' id='contact'>
      <div className='container'>
        <div className='contact-grid'>
          <Reveal>
            <h2 className='section-title'>
              {t.contact.title}
            </h2>
            <p className='contact-text'>{t.contact.text}</p>

            <a className='contact-mail' href='mailto:yannisalouache@gmail.com'>
              <EnvelopeSimple size={17} weight='bold' /> yannisalouache@gmail.com
            </a>

            <div className='socials'>
              <a
                className='social-btn'
                href='https://www.linkedin.com/in/yannis-alouache/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <LinkedinLogo size={19} weight='duotone' />
              </a>
              <a
                className='social-btn'
                href='https://github.com/Yannis-Alouache'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
              >
                <GithubLogo size={19} weight='duotone' />
              </a>
              <a
                className='social-btn'
                href={resume}
                target='_blank'
                rel='noreferrer'
                aria-label={t.contact.cvAria}
              >
                <FilePdf size={19} weight='duotone' />
              </a>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form ref={form} className='contact-form' onSubmit={sendEmail} noValidate>
              {FIELDS.map(field => (
                <div key={field.name} className={`field ${errorField === field.name ? 'error' : ''}`}>
                  <label htmlFor={`contact-${field.name}`}>{t.contact.fields[field.name]}</label>
                  <input id={`contact-${field.name}`} name={field.name} type={field.type || 'text'} />
                  {errorField === field.name && status && (
                    <span className='field-error'>{status.text}</span>
                  )}
                </div>
              ))}

              <div className={`field full ${errorField === 'message' ? 'error' : ''}`}>
                <label htmlFor='contact-message'>{t.contact.fields.message}</label>
                <textarea id='contact-message' name='message' rows={5} />
                {errorField === 'message' && status && (
                  <span className='field-error'>{status.text}</span>
                )}
              </div>

              <div className='form-footer'>
                <button type='submit' className='btn btn-primary' disabled={sending}>
                  {sending ? <span className='spinner' /> : (
                    <>
                      {t.contact.submit} <span className='arrow'><ArrowRight size={16} weight='bold' /></span>
                    </>
                  )}
                </button>
                {status && !errorField && (
                  <span className={`form-status ${status.type}`}>{status.text}</span>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactMe
