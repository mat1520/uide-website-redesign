import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import es from '../i18n/es'
import en from '../i18n/en'

type Language = 'es' | 'en'
type Translations = typeof es

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language')
    return (saved as Language) || 'es'
  })

  const [t, setT] = useState<Translations>(es)

  useEffect(() => {
    localStorage.setItem('language', language)
    setT(language === 'es' ? es : en)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useT() {
  const { t } = useLanguage()
  return t
} 