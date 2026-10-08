import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const STORAGE_KEY = 'portfolio-lang'

function detectLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // localStorage indisponible : on retombe sur la langue du navigateur
  }
  return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'fr'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = translations[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[lang].meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore : simple persistance du choix
    }
  }, [lang])

  const value = { lang, setLang, t: translations[lang] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider')
  }
  return context
}
