import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import linkedinLogo from '../Assets/Images/linkedin-logo.png'
import githubLogo from '../Assets/Images/github-logo.png'
import resume from '../Assets/Pdf/CV.pdf'

const FIELDS = [
  { name: 'lastName', label: 'Nom' },
  { name: 'firstName', label: 'Prénom' },
  { name: 'mail', label: 'E-mail', type: 'email' },
  { name: 'phone', label: 'Téléphone', type: 'tel' },
]

function ContactMe() {
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
      setStatus({ type: 'error', text: 'Entrez un nom' })
      return
    }
    if (!values.firstName) {
      setErrorField('firstName')
      setStatus({ type: 'error', text: 'Entrez un prénom' })
      return
    }
    if (!mailRegex.test(values.mail)) {
      setErrorField('mail')
      setStatus({ type: 'error', text: 'Entrez un e-mail valide' })
      return
    }
    if (!phoneRegex.test(values.phone)) {
      setErrorField('phone')
      setStatus({ type: 'error', text: 'Entrez un numéro de téléphone valide' })
      return
    }
    if (!values.message) {
      setErrorField('message')
      setStatus({ type: 'error', text: 'Entrez un message' })
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
        setStatus({ type: 'success', text: 'Message envoyé ! Je vous réponds au plus vite.' })
        form.current.reset()
      })
      .catch((error) => {
        console.error(error)
        setSending(false)
        setStatus({
          type: 'error',
          text: "Une erreur est survenue, réessayez ou écrivez-moi directement par e-mail.",
        })
      })
  }

  return (
    <section className='section' id='contact'>
      <div className='container'>
        <div className='contact-grid'>
          <Reveal>
            <span className='overline'>Contact</span>
            <h2 className='section-title'>
              Travaillons <span className='grad-text'>ensemble.</span>
            </h2>
            <p className='contact-text'>
              Un projet, une question, une opportunité ? N'hésitez pas à me contacter,
              je serai ravi d'échanger avec vous autour de vos idées.
            </p>

            <a className='contact-mail' href='mailto:yannisalouache@gmail.com'>
              ✉ yannisalouache@gmail.com
            </a>

            <div className='socials'>
              <a
                className='social-btn'
                href='https://www.linkedin.com/in/yannis-alouache/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <img alt='LinkedIn' src={linkedinLogo} />
              </a>
              <a
                className='social-btn'
                href='https://github.com/Yannis-Alouache'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
              >
                <img alt='GitHub' src={githubLogo} />
              </a>
              <a
                className='social-btn'
                href={resume}
                target='_blank'
                rel='noreferrer'
                aria-label='Télécharger mon CV'
              >
                <span style={{ fontSize: '17px' }}>📄</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={130}>
            <form ref={form} className='contact-form' onSubmit={sendEmail} noValidate>
              {FIELDS.map(field => (
                <div key={field.name} className={`field ${errorField === field.name ? 'error' : ''}`}>
                  <label htmlFor={`contact-${field.name}`}>{field.label}</label>
                  <input id={`contact-${field.name}`} name={field.name} type={field.type || 'text'} />
                  {errorField === field.name && status && (
                    <span className='field-error'>{status.text}</span>
                  )}
                </div>
              ))}

              <div className={`field full ${errorField === 'message' ? 'error' : ''}`}>
                <label htmlFor='contact-message'>Message</label>
                <textarea id='contact-message' name='message' rows={5} />
                {errorField === 'message' && status && (
                  <span className='field-error'>{status.text}</span>
                )}
              </div>

              <div className='form-footer'>
                <button type='submit' className='btn btn-primary' disabled={sending}>
                  {sending ? <span className='spinner' /> : (
                    <>
                      Envoyer le message <span className='arrow'>→</span>
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
