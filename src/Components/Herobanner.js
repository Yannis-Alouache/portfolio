import React, { useEffect, useState } from 'react'
import resume from '../Assets/Pdf/CV.pdf'

const ROLES = [
  'Développeur Full-Stack.',
  'React · Node · Python.',
  "Créateur d'expériences web.",
]

function useTypewriter(words, speed = 70, pause = 1800) {
  const [text, setText] = useState('')

  useEffect(() => {
    let wordIndex = 0
    let charIndex = 0
    let deleting = false
    let timer

    const tick = () => {
      const word = words[wordIndex]
      if (!deleting) {
        charIndex++
        setText(word.slice(0, charIndex))
        if (charIndex === word.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
        timer = setTimeout(tick, speed)
      } else {
        charIndex--
        setText(word.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          wordIndex = (wordIndex + 1) % words.length
        }
        timer = setTimeout(tick, speed / 2)
      }
    }

    timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return text
}

function Herobanner() {
  const typed = useTypewriter(ROLES)
  const yearsOfCode = new Date().getFullYear() - 2019

  return (
    <section className='hero'>
      <div className='container hero-grid'>
        <div>
          <div className='hero-badge'>
            <span className='dot' />
            Disponible pour de nouvelles opportunités
          </div>

          <p className='hero-hello'>Bonjour, moi c'est</p>
          <h1 className='hero-title'>
            Yannis <span className='grad-text'>Alouache</span>
          </h1>
          <div className='hero-typed'>
            {typed}
            <span className='caret' />
          </div>

          <p className='hero-sub'>
            Je transforme des idées en produits web modernes, accessibles et centrés sur
            l'utilisateur. Basé à Lille, je travaille aussi bien côté front que côté back.
          </p>

          <div className='hero-actions'>
            <a href='#projects' className='btn btn-primary'>
              Découvrir mes projets <span className='arrow'>→</span>
            </a>
            <a href={resume} target='_blank' rel='noreferrer' className='btn btn-ghost'>
              Télécharger mon CV
            </a>
          </div>

          <div className='hero-stats'>
            <div>
              <div className='stat-value'>8</div>
              <div className='stat-label'>Projets livrés</div>
            </div>
            <div>
              <div className='stat-value'>3</div>
              <div className='stat-label'>Missions freelance</div>
            </div>
            <div>
              <div className='stat-value'>
                {yearsOfCode}
                <span className='plus'>+</span>
              </div>
              <div className='stat-label'>Années de code</div>
            </div>
          </div>
        </div>

        <div className='code-window-wrap'>
          <div className='code-window'>
            <div className='code-window-bar'>
              <span className='code-dot red' />
              <span className='code-dot yellow' />
              <span className='code-dot green' />
              <span className='code-tab'>yannis.config.js</span>
            </div>
            <div className='code-body'>
              <span className='kw'>const</span> <span className='var'>developpeur</span> <span className='punc'>= {'{'}</span>
              {'\n  '}
              <span className='key'>nom</span>
              <span className='punc'>:</span> <span className='str'>"Yannis Alouache"</span>
              <span className='punc'>,</span>
              {'\n  '}
              <span className='key'>role</span>
              <span className='punc'>:</span> <span className='str'>"Développeur Full-Stack"</span>
              <span className='punc'>,</span>
              {'\n  '}
              <span className='key'>localisation</span>
              <span className='punc'>:</span> <span className='str'>"Lille, France"</span>
              <span className='punc'>,</span>
              {'\n  '}
              <span className='key'>stack</span>
              <span className='punc'>:</span> <span className='punc'>[</span>
              <span className='str'>"React"</span>
              <span className='punc'>,</span> <span className='str'>"Node"</span>
              <span className='punc'>,</span> <span className='str'>"Python"</span>
              <span className='punc'>],</span>
              {'\n  '}
              <span className='key'>focus</span>
              <span className='punc'>:</span> <span className='str'>"UX & produits web"</span>
              <span className='punc'>,</span>
              {'\n  '}
              <span className='key'>openToWork</span>
              <span className='punc'>:</span> <span className='bool'>true</span>
              <span className='punc'>,</span>
              {'\n'}
              <span className='punc'>{'};'}</span>
              {'\n\n'}
              <span className='comment'>{'// Toujours prêt pour un nouveau défi'}</span>
              {'\n'}
              <span className='kw'>while</span> <span className='punc'>(</span>
              <span className='var'>curieux</span>
              <span className='punc'>) {'{'}</span> <span className='var'>apprendre</span>
              <span className='punc'>();</span> <span className='var'>créer</span>
              <span className='punc'>(); {'}'}</span>
            </div>
          </div>

          <div className='float-chip react'>
            <img
              alt='React'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
            />
            React
          </div>
          <div className='float-chip ship'>🚀 8 projets livrés</div>
        </div>
      </div>
    </section>
  )
}

export default Herobanner
