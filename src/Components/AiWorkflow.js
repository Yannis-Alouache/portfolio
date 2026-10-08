import React from 'react'
import { ShieldCheck } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { useLanguage } from '../i18n/LanguageContext.js'

function AiWorkflow() {
  const { t } = useLanguage()

  return (
    <section className='section' id='ia'>
      <div className='container'>
        <div className='section-head'>
          <h2 className='section-title'>{t.ai.title}</h2>
          <p className='section-sub'>{t.ai.sub}</p>
        </div>

        <div className='ai-rail'>
          {t.ai.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className='ai-step'>
                <span className='ai-step-num'>{index + 1}</span>
                <div>
                  <h3 className='ai-step-title'>{step.title}</h3>
                  <p className='ai-step-desc'>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className='ai-note'>
            <ShieldCheck size={20} weight='duotone' className='ai-note-icon' />
            <span>
              <strong>{t.ai.noteTitle}</strong> {t.ai.note}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default AiWorkflow
