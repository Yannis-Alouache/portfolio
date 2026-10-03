import React from 'react'
import { ShieldCheck } from '@phosphor-icons/react'
import Reveal from './Reveal'

const STEPS = [
  {
    title: 'Spécifier',
    desc: 'Chaque projet démarre par un cadrage écrit : besoin, périmètre, critères d\'acceptation. Le code ne commence qu\'une fois ce cadre posé.',
  },
  {
    title: 'Planifier',
    desc: 'Avant la première ligne de code, un plan détaillé est rédigé puis revu. L\'IA itère sur la spécification, jamais dans le flou.',
  },
  {
    title: 'Implémenter',
    desc: 'Claude Code travaille en binôme : petites étapes, commits fréquents, skills et serveurs MCP configurés pour chaque projet.',
  },
  {
    title: 'Vérifier',
    desc: 'Des tests automatisés sont systématiquement mis en place pour valider chaque feature produite avec l\'IA. Chaque diff généré est relu avant d\'être intégré.',
  },
]

function AiWorkflow() {
  return (
    <section className='section' id='ia'>
      <div className='container'>
        <div className='section-head'>
          <h2 className='section-title'>L'IA dans ma façon de travailler</h2>
          <p className='section-sub'>
            Claude Code fait partie de mon outillage quotidien, encadré par des méthodes
            qui garantissent la qualité de ce qui est produit.
          </p>
        </div>

        <div className='ai-rail'>
          {STEPS.map((step, index) => (
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
              <strong>Concrètement :</strong> des itérations plus rapides, un cadrage plus
              solide et plus de temps pour l'architecture. L'outillage change, pas l'exigence.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default AiWorkflow
